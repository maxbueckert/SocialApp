import { Text, View , StyleSheet, ScrollView} from 'react-native';

import Header from '../../components/header/Header.js';
import ProfileIconPanel from '../../components/profile/ProfileIconPanel.js';
import BasicInfoPanel from '../../components/profile/BasicInfoPanel.js';
import InterestsPanel from '../../components/profile/InterestsPanel.js';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

import Test1 from './Test1.js';
import Test2 from './Test2.js';


const Stack = createStackNavigator();


export default function EntryProfileScreen() {
    return (
        <View style = {{flex:1}}>
        <Stack.Navigator initialRouteName="test1">
            <Stack.Screen name="test1" component={Test1} options={{ headerShown: false }}/>
            <Stack.Screen name="test2" component={Test2} options={{ headerShown: false }}/>
        </Stack.Navigator>
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

// export default function EntryProfileScreen() {
//     return (
//         <View style = {{flex:1}}>
//         <Header></Header>
//         <ScrollView style = {styles.container}>
//             <ProfileIconPanel></ProfileIconPanel>
//             <BasicInfoPanel></BasicInfoPanel>
//             {/* <InterestsPanel></InterestsPanel> */}
//         </ScrollView>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//       flexDirection: 'column',
//     //   backgroundColor: '#fff',
//     //   alignItems: 'center',
//     //   justifyContent: 'center',
//     },
//   });
  