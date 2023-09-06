import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { CognitoUser, AuthenticationDetails , CognitoUserPool} from 'amazon-cognito-identity-js';

import Header from '../../components/header/Header.js';

const poolData = {
    UserPoolId: 'us-west-2_ZoUst2VmH',
    ClientId: '5dtn41m68s3s07uh8r1cs0id1f'
};

const userPool = new CognitoUserPool(poolData);

export default function SignInScreen({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        const authenticationDetails = new AuthenticationDetails({
            Username: username,
            Password: password,
        });

        const cognitoUser = new CognitoUser({
            Username: username,
            Pool: userPool
        });

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (session) => {
                Alert.alert("Success", "Logged in successfully!");
                navigation.navigate('MainScreen');
                
            },
            onFailure: (err) => {
                Alert.alert("Error", err.message || JSON.stringify(err));
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
            <Button title="Sign In" onPress={handleSignIn} />
        </View>
        </View>
    );
}
