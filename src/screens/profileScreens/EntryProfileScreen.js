import { Text, View , StyleSheet, ScrollView} from 'react-native';

import Header from '../../components/header/Header.js';
import ProfileIconPanel from '../../components/profile/ProfileIconPanel.js'

export default function EntryProfileScreen() {

    return (
        <ScrollView style = {styles.container}>
            <Header></Header>
            <ProfileIconPanel></ProfileIconPanel>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
  });
  