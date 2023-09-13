import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers, getUsers } from '../graphql/queries.js'
import { updateUsers } from '../graphql/mutations.js';
import { onUpdateUsers } from '../graphql/subscriptions.js';

const useFriendActions = (userId, userVersion, setUserVersion) => {
    const [users, setUsers] = useState([]);
    const [userOutgoingFriendRequests, setUserOutgoingFriendRequests] = useState([]);
    const [userIncomingFriendRequests, setUserIncomingFriendRequests] = useState([]);
    const [userFriends, setUserFriends] = useState([]);

    // ... (All your logic goes here: useEffect, fetchUsers, addFriend, cancelFriend, etc.)
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
                const updatedUser = data.value.data.onUpdateUsers;
                setUserFriends(updatedUser.friends);
                setUserIncomingFriendRequests(updatedUser.incomingFriendRequests);
                setUserOutgoingFriendRequests(updatedUser.outgoingFriendRequests);
    
                fetchUsers()

            }
        });

        fetchUsers();

        // Cleanup: Unsubscribe when the component unmounts
        return () => {
            subscription.unsubscribe();
        };
    }, []);

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

        } catch (error) {
            console.error("Error adding friend: ", error);
        }
    }

    async function cancelFriend(friendId) {
        try {
            
            const user = await API.graphql(graphqlOperation(getUsers, { id: userId }));
            const updatedRequests = user.data.getUsers.outgoingFriendRequests.filter(id => id !== friendId);
            const userVersion = user.data.getUsers._version;


            const newCancelFriendRequest = {
                id: userId,
                outgoingFriendRequests: updatedRequests,
                _version: userVersion
            };
            await API.graphql(graphqlOperation(updateUsers, { input: newCancelFriendRequest }));

        
            const friendData = await API.graphql(graphqlOperation(getUsers, { id: friendId }));
            const updatedIncomingRequests = friendData.data.getUsers.incomingFriendRequests.filter(id => id !== userId);
            const friendVersion = friendData.data.getUsers._version;

            const newCancelFriendRequestForFriend = {
                id: friendId,
                incomingFriendRequests: updatedIncomingRequests,
                _version: friendVersion
            };

            await API.graphql(graphqlOperation(updateUsers, { input: newCancelFriendRequestForFriend }));

            alert("Friend request canceled!");

        } catch (error) {
            console.error("Error canceling friend request: ", error);
        }
    }

    async function removeFriend(friendId) {
        try {
            const user = await API.graphql(graphqlOperation(getUsers, { id: userId }));
            const updatedFriends = user.data.getUsers.friends.filter(id => id !== friendId);
            const userVersion = user.data.getUsers._version;
    
            const newRemoveFriend = {
                id: userId,
                friends: updatedFriends,
                _version: userVersion
            };
    
            await API.graphql(graphqlOperation(updateUsers, { input: newRemoveFriend }));
    
    
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

        } catch (error) {
            console.error("Error removing friend: ", error);
        }

    }

    async function acceptFriendRequest(friendId) {
        try{
            const user = await API.graphql(graphqlOperation(getUsers, { id: userId }));
            const updatedIncomingRequests = user.data.getUsers.incomingFriendRequests.filter(id => id !== friendId);
            const updatedFriends = user.data.getUsers.friends.concat(friendId);
            const userVersion = user.data.getUsers._version;

            const newAcceptFriendRequest = {
                id: userId,
                incomingFriendRequests: updatedIncomingRequests,
                friends: updatedFriends,
                _version: userVersion
            } 
            await API.graphql(graphqlOperation(updateUsers, { input: newAcceptFriendRequest }));

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
            
        } catch (error) {
            console.error("Error accepting friend request: ", error);
        }
    }

    async function declineFriendRequest(friendId) {
        try{
            const user = await API.graphql(graphqlOperation(getUsers, { id: userId }));
            const updatedIncomingRequests = user.data.getUsers.incomingFriendRequests.filter(id => id !== friendId);
            const userVersion = user.data.getUsers._version;
            
            const newDeclineFriendRequest = {
                id: userId,
                incomingFriendRequests: updatedIncomingRequests,
                _version: userVersion
            }
            await API.graphql(graphqlOperation(updateUsers, { input: newDeclineFriendRequest }));

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

        } catch (error) {
            console.error("Error declining friend request: ", error);
        }
    }

    return {
        users,
        userOutgoingFriendRequests,
        userIncomingFriendRequests,
        userFriends,
        fetchUsers,
        addFriend,
        cancelFriend,
        removeFriend,
        acceptFriendRequest,
        declineFriendRequest,
    }
}

export default useFriendActions;
