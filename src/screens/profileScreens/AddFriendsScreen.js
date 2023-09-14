import React, { useContext } from 'react';
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';

import Header from '../../components/header/Header.js';

import { UserContext } from '../../temporaryTestFiles/UserProvider.js'
import useFriendActions from '../../hooks/useFriendActions.js';

import useUserInfo from '../../hooks/useUserInfo.js';


export default function AddFriendsScreen() {
    const { userId } = useContext(UserContext);

    const {
        users, // all addable users (excludes friends, incoming requests, outgoing requests, and self)
        userOutgoingFriendRequests, // list of Ids
        userIncomingFriendRequests,// list of Ids
        userFriends, // list of friendIds
        addFriend, // send friend a friend request. Call with addFriend(friendId)
        cancelFriend, // cancel outgoing request. Call with cancelFriend(friendId)
        removeFriend, // delete friend. Call with removeFriend(friendId)
        acceptFriendRequest, // accept incoming request. Call with acceptFriendRequest(friendId)
        declineFriendRequest, // decline incoming request. Call with declineFriendRequest(friendId)
    } = useFriendActions(userId);
    
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



