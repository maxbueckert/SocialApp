import { Text, View , StyleSheet} from 'react-native';

import { Avatar } from 'react-native-paper';

import Header from '../header/Header.js';

export default function ProfileIconPanel({style}) {
    return (
        <View style = {styles.container} >
            <Avatar.Image size={200} source={require('../../../assets/blank_pp.png')} />
            <Text style = {styles.name}> Max, 23 </Text>
            <Text style = {styles.location}> Vancouver, BC </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        // backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 24,
        paddingTop: 20,
    }

});