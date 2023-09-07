import { Navigation } from '@mui/icons-material';
import { useContext, useEffect, useState} from 'react';
import { Text, View , StyleSheet, ScrollView} from 'react-native';
import { Avatar } from 'react-native-paper';
import { Chip } from 'react-native-paper';
import { IconButton, MD3Colors } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import { API, graphqlOperation, Storage, Auth } from 'aws-amplify';

import { UserContext } from '../../temporaryTestFiles/UserProvider.js';

export default function ProfileIconPanel({navigation}) {

    const { userEmail, userName, userAge, userJob, userSchool, userDisplayPhoto } = useContext(UserContext);




    // console.log("display: ", displayPhoto);  
    const fakeInterests = [" Hiking", "Reading", "Partying", "Running", "Snowing"]


    const [imageUrl, setImageUrl] = useState(null);

    const fetchImage = async () => {
        try {
            const signedUrl = await Storage.get(userDisplayPhoto, { level: 'public' });
            setImageUrl(signedUrl);
            console.log("refreshed");
        } catch (error) {
            console.error('Error fetching image', error);
        }
    };

    useEffect(() => {
        fetchImage();
    }, [userDisplayPhoto]);


    return (
        <View style = {styles.container} >
            <Avatar.Image size={200} source={{ uri: imageUrl, cache: 'reload'  }} />

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

