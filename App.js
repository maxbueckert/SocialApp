import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

import AuthOptions from './src/screens/authScreens/AuthOptions.js';
import SignInScreen from './src/screens/authScreens/SignInScreen.js';
import SignUpScreen from './src/screens/authScreens/SignUpScreen.js';
import VerificationScreen from './src/screens/authScreens/VerificationScreen.js';
import MainScreen from './src/screens/MainScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="AuthOptions">
            <Stack.Screen name="AuthOptionsScreen" component={AuthOptions} options={{ headerShown: false }}/>
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
            <Stack.Screen name="VerificationScreen" component={VerificationScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}

