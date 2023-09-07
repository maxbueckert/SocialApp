import { Text, View , StyleSheet, ScrollView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ViewProfileScreen from './ViewProfileScreen.js';
import EditProfileScreen from './EditProfileScreen.js';


const Stack = createStackNavigator();


export default function EntryProfileScreen() {
    return (
        <View style = {{flex:1}}>
        <Stack.Navigator initialRouteName="ViewProfileScreen">
            <Stack.Screen name="ViewProfileScreen" component={ViewProfileScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
    },
  });
