import { Text, View , StyleSheet, ScrollView, Button} from 'react-native';

import Header from '../../components/header/Header.js';
import ProfileIconPanel  from '../../components/profile/ProfileIconPanel.js';
import BasicInfoPanel from '../../components/profile/BasicInfoPanel.js';
import UserPhotos from '../../components/profile/UserPhotos.js';
import { Navigation } from '@mui/icons-material';

export default function ViewProfileScreen({navigation}) {
    return (
        <View style = {{flex:1}}>
        <Header></Header>
        <ScrollView style = {styles.container}>
            <ProfileIconPanel navigation = {navigation}></ProfileIconPanel>
            <BasicInfoPanel></BasicInfoPanel>
            <UserPhotos></UserPhotos>
        </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
    },
  });
  