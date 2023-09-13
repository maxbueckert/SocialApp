import React, { useState , useEffect, useRef} from 'react';
import { View, Button, Alert } from 'react-native';
import { CognitoUser, AuthenticationDetails , CognitoUserPool} from 'amazon-cognito-identity-js';
import { TextInput } from 'react-native-paper';
import { Auth } from 'aws-amplify';

import Header from '../../components/header/Header.js';
import AuthTitle from '../../components/signup/AuthTitle.js'
import Question from '../../components/signup/Question.js';
import Interests from '../../components/signup/Interests.js';

import { API, graphqlOperation } from 'aws-amplify';
import { createUsers, createLike } from '../../graphql/mutations';
import { getLike } from '../../graphql/queries';
import { NavigationOutlined } from '@mui/icons-material';

import useSignUpActions from '../../hooks/useSignUpActions.js';

const poolData = {
    UserPoolId: 'us-west-2_ZoUst2VmH',
    ClientId: '5dtn41m68s3s07uh8r1cs0id1f'
};


const userPool = new CognitoUserPool(poolData);

export default function AttributeScreen({route, navigation}) {
    const  { email, password, userSub } = route.params;

    const {
        userName, setUserName,
        userAge, setUserAge,
        userGender, setUserGender,
        userJob, setUserJob,
        userSchool, setUserSchool,
        userInterests, setUserInterests,
        addToDatabase
    } = useSignUpActions(email, password, userSub);

    const [showInterests, setShowInterests] = useState(false);
    const isFirstRenderOne = useRef(true); // This ref will determine if it's the first render
    const isFirstRenderTwo = useRef(true); 

    // after user enters school (the last text input field required), the interest panel will show up and allow
    // user to select interests
    useEffect(() => {
        // If it's the first render, just update the ref and skip the logic inside
        if (isFirstRenderOne.current) {
            isFirstRenderOne.current = false;
            return;
        }
        setShowInterests(true);
    }, [userSchool]);

    // after user enters INTERESTS, we submit to database
    useEffect(() => {
        // If it's the first render, just update the ref and skip the logic inside
        if (isFirstRenderTwo.current) {
            isFirstRenderTwo.current = false;
            return;
        }
        console.log("user interests:" + userInterests);
        addToDatabase();
    }, [userInterests]);

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
                    !userSchool?   setUserSchool : null
                } 
            ></Question>
            )}

            { showInterests && (
            <View>
            <Interests setUserInterests = {setUserInterests}></Interests>
            </View>
            )}

        </View>
    );
}
