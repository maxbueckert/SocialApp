import { Text, View , StyleSheet, ScrollView, Button} from 'react-native';

import Header from '../../components/header/Header.js';



export default function EntryProfileScreen() {
  return (
      <View style = {{flex:1}}>
          <Header></Header>
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
  