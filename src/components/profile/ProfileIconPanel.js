import { Text, View , StyleSheet} from 'react-native';

import { Avatar } from 'react-native-paper';

import Header from '../header/Header.js';

export default function ProfileIconPanel({style}) {
    return (
        <View style = {styles.container} >
            <Avatar.Image size={200} source={require('../../../assets/favicon.png')} />
            <Text style = {styles.text}> Max, 23 </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        paddingTop: 20,
    }

});