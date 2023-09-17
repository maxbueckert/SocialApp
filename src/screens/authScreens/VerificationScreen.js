import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import { CognitoUser, CognitoUserPool} from 'amazon-cognito-identity-js';
import { TextInput } from 'react-native-paper';

const poolData = {
    UserPoolId: 'us-west-2_ZoUst2VmH',
    ClientId: '5dtn41m68s3s07uh8r1cs0id1f'
};

const userPool = new CognitoUserPool(poolData);

export default function VerificationScreen({ route, navigation }) {
    const [verificationCode, setVerificationCode] = useState('');

    // Get username from previous screen, if you passed it.
    const { username , password, userSub} = route.params;

    const handleVerification = () => {
        console.log("Received username:", username);

        const cognitoUser = new CognitoUser({
            Username: username,
            Pool: userPool
        });

        cognitoUser.confirmRegistration(verificationCode, true, (err, result) => {
            if (err) {
                Alert.alert("Error", err.message || JSON.stringify(err));
                console.log(err);
                console.log("the error is here");
                return;
            }

            Alert.alert("Success", "Verification successful. Please sign in.");
            navigation.navigate('AttributeScreen', {email: username, password: password, userSub : userSub });  // Redirect to SignIn screen
        });
    };

    return (
            <View style={{ paddingTop: 200, flex : 1, alignItems : 'center', justifyContent : 'top' }}>
                <TextInput
                    placeholder="Verification Code"
                    value={verificationCode}
                    onChangeText={setVerificationCode}
                    mode = {'outlined'}
                    style = {{width: 300}}
                    />
                <View style={{height:20}}></View>
                <Button title="Sign In" onPress={handleVerification} />
            </View>
                );
}