import React, { useState, useEffect } from 'react';
import { Text, View , StyleSheet, ScrollView } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { getUsers } from '../../graphql/queries';
import { Auth } from 'aws-amplify';

import Header from '../../components/header/Header.js';
import ChatSearchBar from '../../components/chats/ChatSearchBar.js';

export default function EntryChatsScreen() {
    // const [userEmail, setUserEmail] = useState('');

    // useEffect(() => {
    //     const fetchUserEmail = async () => {
    //         try {
    //             // Get the logged-in user's ID (you may need to adjust based on your auth setup)
    //             const userInfo = await Auth.currentAuthenticatedUser();
    //             const userId = userInfo.attributes.sub; 

    //             console.log('Api call issue');
    //             // console.log(userInfo);

    //             // Fetch user's email using GraphQL
    //             const response = await API.graphql(graphqlOperation(getUsers, { id: userId }));
    //             console.log("User ID from Auth.currentAuthenticatedUser():", userId);
    //             console.log("response: " + response);

    //             const email = response.data.getUsers.email;
    //             setUserEmail(email);
    //         } catch (error) {
    //             console.error("Error fetching user's email:", error);
    //         }
    //     };

    //     fetchUserEmail();
    // }, []);

    return (
        <View style={{flex:1}}>
            <Header></Header>
            <ChatSearchBar></ChatSearchBar>
            <ScrollView style={styles.container}>
                {/* Display the email here */}
                {/* <Text>{userEmail}</Text> */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
    },
});
