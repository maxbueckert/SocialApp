import { Text, View , StyleSheet, ScrollView, Button} from 'react-native';

import Header from '../../components/header/Header.js';
import GroupCard from '../../components/groups/GroupCard.js';
import { Navigation } from '@mui/icons-material';

export default function EditProfileScreen({navigation}) {
    return (
        <View style = {{flex:1}}>
        <Header></Header>
        <ScrollView style = {styles.container}>
        <Text>EDITING PROFILE</Text>
        <Button onPress = {() => {navigation.navigate("ViewProfileScreen")}} title = "Go Back To Profile"></Button>
        <Button onPress = {() => {navigation.navigate("UploadPhotoScreen")}} title = "Upload Photo"></Button>
        <Button onPress = {() => {navigation.navigate("PicPreview")}} title = "View Photo"></Button>
        </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      // justifyContent: 'center',
      // alignItems: 'center',
      
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
  });
  