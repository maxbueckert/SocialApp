import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';

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

        userPool.signUp(username, password, attributeList, null, (err, result) => {
            if (err) {
                Alert.alert("Error", err.message || JSON.stringify(err));
                return;
            }
            Alert.alert("Success", "User registration successful. Please sign in.");
            navigation.navigate('VerificationScreen', {username : username});  // Redirect to SignIn screen
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
