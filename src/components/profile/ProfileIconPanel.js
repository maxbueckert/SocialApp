import { Navigation } from '@mui/icons-material';
import { useContext, useEffect} from 'react';
import { Text, View , StyleSheet, ScrollView} from 'react-native';
import { Avatar } from 'react-native-paper';
import { Chip } from 'react-native-paper';
import { IconButton, MD3Colors } from 'react-native-paper';
import { FAB } from 'react-native-paper';

import { UserContext } from '../../temporaryTestFiles/UserProvider.js';

export default function ProfileIconPanel({navigation}) {

    const { userEmail, userName, userAge, userJob, userSchool, displayPhoto } = useContext(UserContext);
    console.log("display: ", displayPhoto);  
    const fakeInterests = [" Hiking", "Reading", "Partying", "Running", "Snowing"]

    return (
        <View style = {styles.container} >
            <Avatar.Image size={200} source={require('../../../assets/blank_pp.png')} />

            <View style = {{flexDirection : 'row', alignItems: 'baseline', justifyContent: 'center'}}>
                <Text style = {styles.name}>{userName + ", " + userAge}</Text>
                <FAB
                icon="pencil"
                mode = 'flat'
                style={styles.fab}
                onPress={() => navigation.navigate("EditProfileScreen")}
                size = "small"
            />
            </View>

            <View style = {{height:20}}></View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style = {{paddingHorizontal:10}}>
                {fakeInterests.map((interest, index) => {
                    return (
                    <View style = {{flexDirection : 'row'}} key={index}>
                        <Chip showSelectedCheck = {false}>{interest}</Chip>
                        <View style = {{width:10}}></View>
                    </View>
                    )
                }
                )}
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 24,
        paddingTop: 20,
    }, 
    fab: {
      margin: 10,

    }

});