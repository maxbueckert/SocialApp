import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import { CognitoUser, AuthenticationDetails , CognitoUserPool} from 'amazon-cognito-identity-js';
import { TextInput } from 'react-native-paper';

import Header from '../../components/header/Header.js';

import AuthTitle from '../../components/signup/AuthTitle.js'

const poolData = {
    UserPoolId: 'us-west-2_ZoUst2VmH',
    ClientId: '5dtn41m68s3s07uh8r1cs0id1f'
};

const userPool = new CognitoUserPool(poolData);

export default function SignInScreen({navigation}) {
    const [userName, setUserName] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userJob, setUserJob] = useState(null);
    const [userSchool, setUserchool] = useState(null);
    const [userDisplayPhoto, setUserDisplayPhoto] = useState(null);

    return (
        <View style={{ paddingTop: 200, flex : 1, alignItems : 'center', justifyContent : 'top' }}>

            <Button title="Sign In" onPress={() => console.log('hi')} />


        </View>
    );
}
