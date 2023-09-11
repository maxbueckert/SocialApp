import { Navigation } from '@mui/icons-material';
import { useContext, useEffect, useState} from 'react';
import { Text, View , StyleSheet, ScrollView, Image} from 'react-native';
import { Avatar } from 'react-native-paper';
import { Chip } from 'react-native-paper';
import { IconButton, MD3Colors } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import { API, graphqlOperation, Storage, Auth } from 'aws-amplify';

import { UserContext } from '../../temporaryTestFiles/UserProvider.js';
import { Flex } from '@aws-amplify/ui-react';


export default function UserPhotos({navigation}) {

    const { userPhotos } = useContext(UserContext);

    const [imageUrls, setImageUrls] = useState([]);

    const fetchImages = async () => {
        const fetchedImageUrls = [];
        try {
            for (const photoId of userPhotos) {
                const signedUrl = await Storage.get(photoId, { level: 'public' });
                fetchedImageUrls.push(signedUrl);
            }
            setImageUrls(fetchedImageUrls);
            console.log("photos: " + userPhotos);
        } catch (error) {
            console.error('Error fetching image', error);
        }
    };
    

    useEffect(() => {
        fetchImages();
    }, [userPhotos]);


    return (
        <View>
            {imageUrls.map((image, index) => (
                <Image key = {index} source = {{uri: image}} style = {{aspectRatio: 4/3, width: '100%'}}></Image>
            ))}
        </View>
    );
}



