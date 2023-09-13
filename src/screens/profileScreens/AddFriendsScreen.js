import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';

import Header from '../../components/header/Header.js';

import { listUsers, getUsers } from '../../graphql/queries.js';
import { UserContext } from '../../temporaryTestFiles/UserProvider.js'
import { updateUsers } from '../../graphql/mutations.js';
import { onUpdateUsers } from '../../graphql/subscriptions.js';



export default function AddFriendsScreen() {
    const [users, setUsers] = useState([]);
    const [userOutgoingFriendRequests, setUserOutgoingFriendRequests] = useState([]);
    const [userIncomingFriendRequests, setUserIncomingFriendRequests] = useState([]);
    const [userFriends, setUserFriends] = useState([]);
//     const [addableUsers, setAddableUsers] = useState([]);
    const { userId, userVersion, setUserVersion } = useContext(UserContext);
    const [triggerRefresh, setTriggerRefresh] = useState(false);

    useEffect(() => {
        
        // Subscribe when the component mounts
        const subscription = API.graphql(
            graphqlOperation(onUpdateUsers, {
                filter: {
                    id: {
                        eq: userId
                    }
                }
            })
        ).subscribe({
            next: (data) => {
                // console.log('User data updated:', data);Thes
                // Handle the updated data appropriately if needed
            }
        });

        fetchUsers();

        // Cleanup: Unsubscribe when the component unmounts
        return () => {
            subscription.unsubscribe();
        };
    }, [triggerRefresh]);

    async function fetchUsers() {
        try {
            // grab all users
            const userData = await API.graphql(graphqlOperation(listUsers));
            // get user outgoing friend requests
            const user = await API.graphql(graphqlOperation(getUsers, { id: userId }));
            const outgoingRequests = user.data.getUsers.outgoingFriendRequests;
            setUserOutgoingFriendRequests(outgoingRequests);
            // get user incoming friend requests
            const incomingRequests = user.data.getUsers.incomingFriendRequests;
            setUserIncomingFriendRequests(incomingRequests);
            // get user friends
            const friends = user.data.getUsers.friends;
            setUserFriends(friends);
            // filter users for viewing addable friends
            const filteredUsers = userData.data.listUsers.items.filter(u => u.id !== userId && !outgoingRequests.includes(u.id) && !incomingRequests.includes(u.id) && !friends.includes(u.id));
            console.log("ongoing requests: ", outgoingRequests);

            setUsers(filteredUsers);
            console.log("Refreshed.");


        } catch (error) {
            console.error("Error fetching users: ", error);
        }
    }


    async function addFriend(friendId) {
        try {
            // this will update the request simply by adding the friendId to the outgoingFriendRequests array
            const newOutgoingFriendRequest = {
                id: userId,
                outgoingFriendRequests: friendId,
            };
            await API.graphql(graphqlOperation(updateUsers, { input: newOutgoingFriendRequest }));

            setUserVersion(userVersion + 1)


            const newIncomingFriendRequest = {
                id: friendId,
                incomingFriendRequests: userId,
            };
            await API.graphql(graphqlOperation(updateUsers, { input: newIncomingFriendRequest }));

            alert("Friend request sent!");
            setTriggerRefresh(prev => !prev);
        } catch (error) {
            console.error("Error adding friend: ", error);
        }
    }

    async function cancelFriend(friendId) {
        try {
            
            const user = await API.graphql(graphqlOperation(getUsers, { id: userId }));
            const updatedRequests = user.data.getUsers.outgoingFriendRequests.filter(id => id !== friendId);
            console.log("updatedRequests changed to in cancelfriend: ", updatedRequests);

            const newCancelFriendRequest = {
                id: userId,
                outgoingFriendRequests: updatedRequests,
                _version: userVersion
            };
            await API.graphql(graphqlOperation(updateUsers, { input: newCancelFriendRequest }));

            setUserVersion(userVersion + 1);

            const friendData = await API.graphql(graphqlOperation(getUsers, { id: friendId }));
            const updatedIncomingRequests = friendData.data.getUsers.incomingFriendRequests.filter(id => id !== userId);
            const friendVersion = friendData.data.getUsers._version;
            console.log("updatedIncomingRequests changed to in cancelfriend: ", updatedIncomingRequests);

            const newCancelFriendRequestForFriend = {
                id: friendId,
                incomingFriendRequests: updatedIncomingRequests,
                _version: friendVersion
            };

            await API.graphql(graphqlOperation(updateUsers, { input: newCancelFriendRequestForFriend }));

            alert("Friend request canceled!");
            setTriggerRefresh(prev => !prev);

        } catch (error) {
            console.error("Error canceling friend request: ", error);
        }
    }

    async function removeFriend(friendId) {
        try {
            const user = await API.graphql(graphqlOperation(getUsers, { id: userId }));
            const updatedFriends = user.data.getUsers.friends.filter(id => id !== friendId);
    
            const newRemoveFriend = {
                id: userId,
                friends: updatedFriends,
                _version: userVersion
            };
    
            await API.graphql(graphqlOperation(updateUsers, { input: newRemoveFriend }));
    
            setUserVersion(userVersion + 1);
    
            const friendData = await API.graphql(graphqlOperation(getUsers, { id: friendId }));
            const updatedFriendsForFriend = friendData.data.getUsers.friends.filter(id => id !== userId);
            const friendVersion = friendData.data.getUsers._version;
    
            const newRemoveFriendForFriend = {
                id: friendId,
                friends: updatedFriendsForFriend,
                _version: friendVersion
            }
    
            await API.graphql(graphqlOperation(updateUsers, { input: newRemoveFriendForFriend }));
    
            alert("Friend removed!");
            setTriggerRefresh(prev => !prev);

        } catch (error) {
            console.error("Error removing friend: ", error);
        }

    }

    async function acceptFriendRequest(friendId) {
        try{
            const user = await API.graphql(graphqlOperation(getUsers, { id: userId }));
            const updatedIncomingRequests = user.data.getUsers.incomingFriendRequests.filter(id => id !== friendId);
            const updatedFriends = user.data.getUsers.friends.concat(friendId);

            const newAcceptFriendRequest = {
                id: userId,
                incomingFriendRequests: updatedIncomingRequests,
                friends: updatedFriends,
                _version: userVersion
            } 
            await API.graphql(graphqlOperation(updateUsers, { input: newAcceptFriendRequest }));
            setUserVersion(userVersion + 1);

            const friendData = await API.graphql(graphqlOperation(getUsers, { id: friendId }));
            const updatedOutgoingRequests = friendData.data.getUsers.outgoingFriendRequests.filter(id => id !== userId);
            const updatedFriendsForFriend = friendData.data.getUsers.friends.concat(userId);
            const friendVersion = friendData.data.getUsers._version;

            const newAcceptFriendRequestForFriend = {
                id: friendId,
                outgoingFriendRequests: updatedOutgoingRequests,
                friends: updatedFriendsForFriend,
                _version: friendVersion
            }
            await API.graphql(graphqlOperation(updateUsers, { input: newAcceptFriendRequestForFriend }));

            alert("Friend request accepted!");
            setTriggerRefresh(prev => !prev);
            
        } catch (error) {
            console.error("Error accepting friend request: ", error);
        }
        

    }

    async function declineFriendRequest(friendId) {
        try{
            const user = await API.graphql(graphqlOperation(getUsers, { id: userId }));
            const updatedIncomingRequests = user.data.getUsers.incomingFriendRequests.filter(id => id !== friendId);
            
            const newDeclineFriendRequest = {
                id: userId,
                incomingFriendRequests: updatedIncomingRequests,
                _version: userVersion
            }
            await API.graphql(graphqlOperation(updateUsers, { input: newDeclineFriendRequest }));
            setUserVersion(userVersion + 1);

            const friendData = await API.graphql(graphqlOperation(getUsers, { id: friendId }));
            const updatedOutgoingRequests = friendData.data.getUsers.outgoingFriendRequests.filter(id => id !== userId);
            const friendVersion = friendData.data.getUsers._version;

            const newDeclineFriendRequestForFriend = {
                id: friendId,
                outgoingFriendRequests: updatedOutgoingRequests,
                _version: friendVersion
            }
            await API.graphql(graphqlOperation(updateUsers, { input: newDeclineFriendRequestForFriend }));

            alert("Friend request declined!");
            setTriggerRefresh(prev => !prev);

        } catch (error) {
            console.error("Error declining friend request: ", error);
        }
    }
    
    
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <Text>Find Friends</Text>
                {
                    users.map(user => (
                        <View key={user.id} style={styles.userContainer}>
                            <Text>{user.name}</Text>
                            <Text>{user.id}</Text>
                            <Button title="Add Friend" onPress={() => addFriend(user.id)} />
                        </View>
                    ))
                }
                <Text>Outgoing Requests</Text>
                {
                    userOutgoingFriendRequests.map(friendId => (
                        <View key={friendId} style={styles.userContainer}>
                            <Text>{friendId}</Text>
                            <Button title="Cancel Friend Request" onPress={() => cancelFriend(friendId)} />
                        </View>
                    ))
                }
                <Text>Incoming Requests</Text>
                {
                    userIncomingFriendRequests.map(friendId => (
                        <View key={friendId} style={styles.userContainer}>
                            <Text>{friendId}</Text>
                            <Button title="Accept Friend Request" onPress={() => acceptFriendRequest(friendId)} />
                            <Button title="Decline Friend Request" onPress={() => declineFriendRequest(friendId)} />
                        </View>
                    ))
                }
                <Text>Friends List</Text>
                {
                    userFriends.map(friendId => (
                        <View key={friendId} style={styles.userContainer}>
                            <Text>{friendId}</Text>
                            <Button title="Remove Friend" onPress={() => removeFriend(friendId)} />
                        </View>
                    ))
                }

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    userContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    }
});



