//default layout
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../temporaryTestFiles/UserProvider.js';
import { Text, View } from 'react-native';
import Header from '../../components/header/Header.js';
import { listUsers, getLike } from '../../graphql/queries.js';
import { API, graphqlOperation } from 'aws-amplify';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from 'react-native';
import { updateLike, createConnection } from '../../graphql/mutations.js';

export default function MainSwipeScreen() {
    // store list of all users
    const [users, setUsers] = useState([]);
    // bring in userId
    const { userId } = useContext(UserContext);
    const likeId = "ee1dbb19-006c-4fb5-a70d-7d2008fa9df9"
    const likeeId = "b8f1f360-0081-70cd-7699-303a3708081b"
    const potentialMatchLikeID = "83f628c1-0176-4d1d-8da4-cccc37f6ae7a"

    // trigger fetchUsers() when component loads
    useEffect(() => {
        fetchUsers();
    }, []);

    async function createMatch() {
        try {
            // input is the two users' IDs
            const input = {
                user1: userId,
                user2: "b8f1f360-0081-70cd-7699-303a3708081b"
            }
            // create a new connection
            await API.graphql(graphqlOperation(createConnection, {input: input}));
            console.log("Connection created!");

        } catch (error) {
            console.error("Error creating connection:", error);
        }
    }

    async function addtoLikeeArray() {
        // setup values
        const input =  {
            id: likeId,
            likee: likeeId
        }
        // update database
        await API.graphql(graphqlOperation(updateLike, {input: input}));
        console.log("Likee array updated!");
    }

    async function checkForMatch() {
        try {
            console.log("Checking for match...");
            // get the Like Table for the potential match
            const result = await API.graphql(graphqlOperation(getLike, { id: potentialMatchLikeID }));
            // get the list of their likees
            const likeeArray = result.data.getLike.likee;
    

            if (likeeArray && likeeArray.length > 0) {
                // check if the current user is in the list of likees
                if (likeeArray.includes(userId)) {
                    console.log("It's a match!"); 
                    createMatch();
                } else {
                    console.log("It's not a match yet! Keep swiping!");
                    addtoLikeeArray();
                }

            } else {
                console.log("Likee array is empty or not available.");
                addtoLikeeArray();
            }
        } catch (error) {
            console.error("Error fetching like: ", error);
        }
    }



    async function fetchUsers() {
        try {
            // fetch all users
            const userData = await API.graphql(graphqlOperation(listUsers));
            // filter out the current user based on userId
            const filteredUsers = userData.data.listUsers.items.filter(user => user.id !== userId);
            
            // store users in state variable
            setUsers(filteredUsers);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }



    return (
        <View style={{ flex: 1 }}>
            <Header></Header>
            <Button title="Like" onPress={checkForMatch} />
        </View>
    );
}

