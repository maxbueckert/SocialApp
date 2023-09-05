import { Text, View , StyleSheet, ScrollView} from 'react-native';

import Header from '../../components/header/Header.js';
import GroupCard from '../../components/groups/GroupCard.js';

export default function EntryProfileScreen() {
    return (
        <View style = {{flex:1}}>
        <Header></Header>
        <ScrollView style = {styles.container}>
        <GroupCard></GroupCard>
        <GroupCard></GroupCard>
        <GroupCard></GroupCard>

        </ScrollView>
        </View>
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
  