import { Text, View , StyleSheet, ScrollView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


import ViewProfileScreen from './ViewProfileScreen.js';
import EditProfileScreen from './EditProfileScreen.js';
import UploadPhotoScreen from './UploadPhotoScreen.js';
import PicPreview from './PicPreview.js';
import UploadMultiplePhotosTestScreen from './UploadMultiplePhotosTestScreen.js';
import AddFriendsScreen from './AddFriendsScreen.js';


const Stack = createStackNavigator();

export default function EntryProfileScreen() {
    
    return (
        <View style = {{flex:1}}>
        <Stack.Navigator initialRouteName="ViewProfileScreen">
            <Stack.Screen name="ViewProfileScreen" component={ViewProfileScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="UploadPhotoScreen" component={UploadPhotoScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="PicPreview" component={PicPreview} options={{ headerShown: false }}/>
            <Stack.Screen name="UploadMultiplePhotosTestScreen" component={UploadMultiplePhotosTestScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="AddFriendsScreen" component={AddFriendsScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
    },
  });
