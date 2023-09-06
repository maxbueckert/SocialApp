import { Text, View , StyleSheet, ScrollView, Button} from 'react-native';

import Header from '../../components/header/Header.js';
import GroupCard from '../../components/groups/GroupCard.js';
import { Navigation } from '@mui/icons-material';

export default function Test1({navigation}) {
    return (
        <View style = {{flex:1}}>
        <Header></Header>
        <ScrollView style = {styles.container}>
        <Text>test1</Text>
        <Button onPress = {() => {navigation.navigate("test2")}} title = "press me"></Button>
        </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
    
    },
  });
  