import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { API, graphqlOperation } from 'aws-amplify';
import { createUsers, createLike } from '../../graphql/mutations';
import { TextInput } from 'react-native-paper';



import AuthTitle from '../../components/signup/AuthTitle.js'



const poolData = {
    UserPoolId: 'us-west-2_ZoUst2VmH',
    ClientId: '5dtn41m68s3s07uh8r1cs0id1f'
};

const userPool = new CognitoUserPool(poolData);

export default function SignUpScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    // // this will be moved to verification screen
    // async function addToDatabase(userSub) {
    //     try {
    //         // add User entry to DB
    //         const newUser = {
    //             id: userSub,  // Use the passed in userSub
    //             // name: email,
    //             email: email
    //         };
    //         await API.graphql(graphqlOperation(createUsers, { input: newUser }));
            
    //         console.log("created new User: " + newUser);

    //         // add Like entry for user to DB
    //         const newLike = {
    //             likerID: newUser.id,
    //             likes: [],  // initially, the likee list can be empty
    //             matches: [] // initially, the matches list can be empty
    //         };
    //         await API.graphql(graphqlOperation(createLike, { input: newLike }));

    //         console.log("created new Like for User: " + newLike);

    //     } catch (error) {
    //         console.error("Error adding user to the database", error);
    //     }
    // }

    const handleSignUp = () => {

        
        const attributeList = [
            new CognitoUserAttribute({
                Name: 'email',
                Value: email
            }),
        ];
        
        console.log(email);
        console.log(username);
        console.log(password);

        userPool.signUp(email, password, attributeList, null, async (err, result) => {
            if (err) {
                Alert.alert("Error", err.message || JSON.stringify(err));
                return;
            }
    
            // If sign-up is successful, make the GraphQL mutation to add the user to the Users table
            try {
                // call to create db entries for user
                // addToDatabase(result.userSub);
                navigation.navigate('VerificationScreen', {username : email, password : password, userSub : result.userSub});

            } catch (error) {

                console.error("Error adding user to the database", error);

            }
        });
    };
    

    return (
        <View style={{ paddingTop: 200, flex : 1, alignItems : 'center', justifyContent : 'top' }}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                mode = {'outlined'}
                style = {{width: 300}}
            />
        <View style={{height:20}}></View>
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                mode = {'outlined'}
                style = {{width: 300}}
                secureTextEntry
            />
            <View style={{height:20}}></View>
            <View style={{height:20}}></View>
            <Button title="Sign Up" onPress={handleSignUp} />


        </View>
    );
}

