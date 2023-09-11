import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';

import Header from '../../components/header/Header.js';

import { listUsers } from '../../graphql/queries.js';
import { UserContext } from '../../temporaryTestFiles/UserProvider.js'
import { updateUsers } from '../../graphql/mutations.js';



export default function AddFriendsScreen() {
    const [users, setUsers] = useState([]);
    const {userId, userEmail, userName, userAge, userJob, userSchool, userDisplayPhoto, setUserDisplayPhoto, userVersion, setUserVersion, userInterests , userPhotos, setUserPhotos, userFriends, setUserFriends, userIncomingFriendRequests, setUserIncomingFriendRequests, userOutgoingFriendRequests, setUserOutgoingFriendRequests} = useContext(UserContext);

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            // grab all users
            const userData = await API.graphql(graphqlOperation(listUsers));
            // filter out the current user
            filteredUsers = userData.data.listUsers.items.filter(user => user.id !== userId);
            setUsers(filteredUsers);

        } catch (error) {
            console.error("Error fetching users: ", error);
        }
    }


    async function addFriend(friendId, friendVersion) {
        try {
            const updatedOutgoingRequests = [...new Set([...userOutgoingFriendRequests, friendId])];
            const updatedIncomingRequestsForFriend = [...new Set([...(users.find(u => u.id === friendId).incomingFriendRequests || []), userId])];
    
            const newOutgoingFriendRequest = {
                id: userId,
                outgoingFriendRequests: updatedOutgoingRequests,
                _version: userVersion
            }
            setUserVersion(userVersion + 1);
    
            await API.graphql(graphqlOperation(updateUsers, { input: newOutgoingFriendRequest }));
    
            const newIncomingFriendRequest = {
                id: friendId,
                incomingFriendRequests: updatedIncomingRequestsForFriend,
                _version: friendVersion
            }
    
            await API.graphql(graphqlOperation(updateUsers, { input: newIncomingFriendRequest }));
    
            console.log("Friend request sent!");
    
        } catch (error) {
            console.error("Error adding friend: ", error);
        }
    }
    

    async function acceptFriend(friendId) {
        try {
            const friendData = users.find(u => u.id === friendId);
            if (!friendData) {
                throw new Error("Friend not found!");
            }
    
            // Update the user's data
            const updatedIncomingRequests = userIncomingFriendRequests.filter(id => id !== friendId);
            const updatedFriends = [...new Set([...userFriends, friendId])];
            const userUpdateInput = {
                id: userId,
                friends: updatedFriends,
                incomingFriendRequests: updatedIncomingRequests,
                _version: userVersion
            };

            setUserVersion(userVersion + 1);

            await API.graphql(graphqlOperation(updateUsers, { input: userUpdateInput }));
    
            // Update the friend's data
            const updatedOutgoingRequestsForFriend = (friendData.outgoingFriendRequests || []).filter(id => id !== userId);
            const updatedFriendsForFriend = [...new Set([...(friendData.friends || []), userId])];
            const friendUpdateInput = {
                id: friendId,
                friends: updatedFriendsForFriend,
                outgoingFriendRequests: updatedOutgoingRequestsForFriend,
                _version: friendData._version
            };
            await API.graphql(graphqlOperation(updateUsers, { input: friendUpdateInput }));
    
            console.log("Accepted friend request!");
    
        } catch (error) {
            console.error("Error accepting friend: ", error);
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
                            <Button title="Add Friend" onPress={() => addFriend(user.id, user._version)} />
                        </View>
                    ))
                }
                <Text>Incoming Friends</Text>
                {
                    userIncomingFriendRequests.map(friendId => (
                        <View key={friendId} style={styles.userContainer}>
                            <Text>{friendId}</Text>
                            <Button title="Accept Friend" onPress={() => acceptFriend(friendId)} />
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



