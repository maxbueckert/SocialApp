import * as React from 'react';
import { Text, View , StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from '../components/header/Header.js';

import EntryProfileScreen from './profileScreens/EntryProfileScreen.js';
import EntryGroupsScreen from './groupsScreens/EntryGroupsScreens.js';
import EntryChatScreen from './chatsScreens/EntryChatsScreen.js';


const Tab = createBottomTabNavigator();


export default function MainScreen() {
  return (
    <SafeAreaProvider>

    <NavigationContainer independent = {true}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Swipe" component={Header} />
        <Tab.Screen name="Matches" component={Header} />
        <Tab.Screen name="Chats" component={EntryChatScreen} />
        <Tab.Screen name="Groups" component={EntryGroupsScreen} />
        <Tab.Screen name="Profile" component={EntryProfileScreen} />
      </Tab.Navigator>

    </NavigationContainer>

    </SafeAreaProvider>
  );
}

