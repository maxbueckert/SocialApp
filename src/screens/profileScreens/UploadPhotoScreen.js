import { Text, View , StyleSheet, ScrollView, Button} from 'react-native';

import Header from '../../components/header/Header.js';
import GroupCard from '../../components/groups/GroupCard.js';
import { Navigation } from '@mui/icons-material';

export default function UploadPhotoScreen({navigation}) {
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
  