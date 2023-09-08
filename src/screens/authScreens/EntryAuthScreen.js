import * as React from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-paper';
import AuthTitle from '../../components/signup/AuthTitle.js'

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

import Options from './Options.js';
import SignInScreen from './SignInScreen.js';
import SignUpScreen from './SignUpScreen.js';
import VerificationScreen from './VerificationScreen.js';
import AttributeScreen from './AttributeScreen.js';

const AuthStack = createStackNavigator();

const EntryAuthScreen = ({navigation}) => (
    <View style = {{flex:1}}>
    <AuthTitle></AuthTitle>
    <AuthStack.Navigator initialRouteName="Options">
            <AuthStack.Screen name="Options" component={Options} options={{ headerShown: false }}/>
            <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }}/>
            <AuthStack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
            <AuthStack.Screen name="VerificationScreen" component={VerificationScreen} options={{ headerShown: false }} />
            <AuthStack.Screen name="AttributeScreen" component={AttributeScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
    </View>
);

export default EntryAuthScreen;