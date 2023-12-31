import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { Amplify, Storage } from 'aws-amplify';
import awsconfig from './src/aws-exports';

import EntryAuthScreen from './src/screens/authScreens/EntryAuthScreen.js';
import SignInScreen from './src/screens/authScreens/SignInScreen.js';
import SignUpScreen from './src/screens/authScreens/SignUpScreen.js';
import VerificationScreen from './src/screens/authScreens/VerificationScreen.js';
import MainScreen from './src/screens/MainScreen.js';

import { colors } from './src/themes/darkTheme.js';



import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();
Amplify.configure(awsconfig);


// import { Amplify, Auth, Storage } from 'aws-amplify';

Amplify.configure({
  Auth: {
    identityPoolId: 'us-west-2:b465e88a-8d03-403d-92dc-95f63f94b1eb', //REQUIRED - Amazon Cognito Identity Pool ID
    region: 'us-west-2', // REQUIRED - Amazon Cognito Region
    userPoolId: 'us-west-2_ZoUst2VmH', //OPTIONAL - Amazon Cognito User Pool ID
    userPoolWebClientId: '5dtn41m68s3s07uh8r1cs0id1f', //OPTIONAL - Amazon Cognito Web Client ID
  },
  Storage: {
    AWSS3: {
      bucket: 'socialapp-storage-77d0974c123934-dev', //REQUIRED -  Amazon S3 bucket name
      region: 'us-west-2', //OPTIONAL -  Amazon service region
      isObjectLockEnabled: true //OPTIONAl - Object Lock parameter
    }
  }
});


export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: colors


  };

  return (
    <PaperProvider theme = {theme}>
    <SafeAreaProvider>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="EntryAuthScreen">
            <Stack.Screen name="EntryAuthScreen" component={EntryAuthScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
    </PaperProvider>
  );
}

