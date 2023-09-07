import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { CognitoUser, CognitoUserPool} from 'amazon-cognito-identity-js';

import Header from '../../components/header/Header.js';

const poolData = {
    UserPoolId: 'us-west-2_ZoUst2VmH',
    ClientId: '5dtn41m68s3s07uh8r1cs0id1f'
};

const userPool = new CognitoUserPool(poolData);

export default function VerificationScreen({ route, navigation }) {
    const [verificationCode, setVerificationCode] = useState('');

    // Get username from previous screen, if you passed it.
    const { username } = route.params;

    const handleVerification = () => {
        const cognitoUser = new CognitoUser({
            Username: username,
            Pool: userPool
        });

        cognitoUser.confirmRegistration(verificationCode, true, (err, result) => {
            if (err) {
                Alert.alert("Error", err.message || JSON.stringify(err));
                return;
            }
            Alert.alert("Success", "Verification successful. Please sign in.");
            navigation.navigate('SignInScreen');  // Redirect to SignIn screen
        });
    };

    return (
        <View style = {{flex:1}}>
        <Header></Header>
        <View style={{ padding: 20, flex : 1, alignItems : 'center', justifyContent : 'center' }}>
            <TextInput
                placeholder="Verification Code"
                value={verificationCode}
                onChangeText={setVerificationCode}
            />
            <Button title="Verify" onPress={handleVerification} />
        </View>
        </View>
    );
}
