import * as React from 'react';
import { Text, View , StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from './src/components/header/Header.js';

import EntryProfileScreen from './src/screens/profileScreens/EntryProfileScreen.js';
import EntryEventsScreen from './src/screens/eventsScreens/EntryEventsScreen.js';
import EntryGroupsScreen from './src/screens/groupsScreens/EntryGroupsScreens.js';
import EntryChatScreen from './src/screens/chatsScreens/EntryChatsScreen.js';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>

    <NavigationContainer>

      <Tab.Navigator screenOptions={{ headerShown: false }}>

        <Tab.Screen name="Swipe" component={Header} />
        {/* <Tab.Screen name="Matches" component={Header} /> */}
        <Tab.Screen name="Events" component={EntryEventsScreen} />
        <Tab.Screen name="Chats" component={EntryChatScreen} />
        <Tab.Screen name="Groups" component={EntryGroupsScreen} />
        <Tab.Screen name="Profile" component={EntryProfileScreen} />
      </Tab.Navigator>

    </NavigationContainer>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
