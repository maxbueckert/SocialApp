import { Text, View , StyleSheet, ScrollView, Button} from 'react-native';

import Header from '../../components/header/Header.js';
import GroupCard from '../../components/groups/GroupCard.js';
import { Navigation } from '@mui/icons-material';
import { Auth } from 'aws-amplify';
import SignInScreen from '../authScreens/SignInScreen.js';

export default function EditProfileScreen({navigation}) {

  async function signOut() {
    try {
        await Auth.signOut();
        // Once signed out, navigate to the desired screen (e.g., login screen).
        console.log("Logged out")  // replace with your login screen's name if it's different
    } catch (error) {
        console.error('error signing out: ', error);
    }
  } 


    return (
        <View style = {{flex:1}}>
        <Header></Header>
        <ScrollView style = {styles.container} contentContainerStyle = {{alignItems : 'center', justifyContent : 'center'}}>
        <Text>EDITING PROFILE</Text>
        <Button onPress = {() => {navigation.navigate("ViewProfileScreen")}} title = "Go Back To Profile"></Button>
        <Button onPress = {() => {navigation.navigate("UploadPhotoScreen")}} title = "Edit Display Photo"></Button>
        {/* <Button onPress = {() => {navigation.navigate("PicPreview")}} title = "View Photo"></Button> */}
        <Button onPress = {() => {navigation.navigate("UploadMultiplePhotosTestScreen")}} title = "Upload Photo"></Button>
        <Button onPress = {() => {navigation.navigate("AddFriendsScreen")}} title = "Add Friends"></Button>
        <Button onPress={signOut} title="Log Out"></Button>
        </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
    }
  });
  