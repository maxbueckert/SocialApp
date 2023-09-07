import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { API, graphqlOperation } from 'aws-amplify';
import { createUsers } from '../../graphql/mutations';



import Header from '../../components/header/Header.js';

const poolData = {
    UserPoolId: 'us-west-2_ZoUst2VmH',
    ClientId: '5dtn41m68s3s07uh8r1cs0id1f'
};

const userPool = new CognitoUserPool(poolData);

export default function SignUpScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');




    const handleSignUp = () => {
        const attributeList = [
            new CognitoUserAttribute({
                Name: 'email',
                Value: email
            }),
        ];
    
        userPool.signUp(username, password, attributeList, null, async (err, result) => {
            if (err) {
                Alert.alert("Error", err.message || JSON.stringify(err));
                return;
            }
    
            // If sign-up is successful, make the GraphQL mutation to add the user to the Users table
            try {
                const newUser = {
                    id: result.userSub,  // This is the unique ID assigned to the user by Cognito
                    name: username,
                    email: email
                };
    
                await API.graphql(graphqlOperation(createUsers, { input: newUser }));
                Alert.alert("Success", "User registration successful. Please verify your email.");
                console.log(newUser);
                navigation.navigate('VerificationScreen', {username : username});
            } catch (error) {
                console.error("Error adding user to the database", error);
            }
        });
    };
    

    return (
        <View style = {{flex:1}}>
        <Header></Header>
        <View style={{ padding: 20, flex : 1, alignItems : 'center', justifyContent : 'center' }}>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <Button title="Sign Up" onPress={handleSignUp} />
        </View>
        </View>
    );
}
