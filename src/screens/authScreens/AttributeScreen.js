import React, { useState , useEffect, useRef} from 'react';
import { View, Button, Alert } from 'react-native';
import { CognitoUser, AuthenticationDetails , CognitoUserPool} from 'amazon-cognito-identity-js';
import { TextInput } from 'react-native-paper';

import Header from '../../components/header/Header.js';
import AuthTitle from '../../components/signup/AuthTitle.js'
import Question from '../../components/signup/Question.js';
import Interests from '../../components/signup/Interests.js';


const poolData = {
    UserPoolId: 'us-west-2_ZoUst2VmH',
    ClientId: '5dtn41m68s3s07uh8r1cs0id1f'
};

const userPool = new CognitoUserPool(poolData);

export default function SignInScreen({navigation}) {

    const [userName, setUserName] = useState(null);
    const [userAge, setUserAge] = useState(0);
    const [userGender, setUserGender] = useState(null);
    const [userDisplayPhoto, setUserDisplayPhoto] = useState(null);
    const [userJob, setUserJob] = useState(null);
    const [userSchool, setUserchool] = useState(null);
    const [userInterests, setUserInterests] = useState([])

    const [showInterests, setShowInterests] = useState(false);

    const isFirstRender = useRef(true); // This ref will determine if it's the first render

    useEffect(() => {
        // If it's the first render, just update the ref and skip the logic inside
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        setShowInterests(true);
    }, [userSchool]);

    return (
        <View style={{ paddingTop: 200, flex : 1, alignItems : 'center', justifyContent : 'top' }}>

            {!userSchool && (
            <Question
                question = {
                    !userName? "What is your name?" :
                    !userAge?  "How old are you?" :
                    !userGender?   "Please enter your gender" :
                    !userJob?      "What do you do for work?" :
                    !userSchool?   "Where did you go to school?" : null
                }
                fn = {
                    !userName? setUserName :
                    !userAge?  setUserAge :
                    !userGender?   setUserGender :
                    !userJob?      setUserJob :
                    !userSchool?   setUserchool : null
                } 
            ></Question>
            )}

            { showInterests && (
            <Interests></Interests>
            )}

        </View>
    );
}
