import { Text, View , StyleSheet, ScrollView, Button} from 'react-native';

import Header from '../../components/header/Header.js';
import GroupCard from '../../components/groups/GroupCard.js';
import { Navigation } from '@mui/icons-material';

import React, { useState } from 'react';
import { Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Storage } from 'aws-amplify';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { updateUsers } from '../../graphql/mutations';
import { getUsers } from '../../graphql/queries';




export default function UploadPhotoScreen({navigation}) {
    const [selectedImage, setSelectedImage] = useState(null);

    const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    // Check if the operation was canceled
    if (!result.canceled) {
        // Get the URI from the assets array
        const selectedUri = result.assets[0].uri;
        const userInfo = await Auth.currentAuthenticatedUser();
        const userId = userInfo.attributes.sub;
        setSelectedImage(selectedUri);
        uploadToS3(userId, selectedUri);
      }
    };

    const uploadToS3 = async (userId, uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();

        // Generate a unique filename
        const uniqueFileName = `image_${new Date().toISOString()}.jpg`;
        
        try {
          const storageResponse = await Storage.put(uniqueFileName, blob, {
              level: 'public',
              contentType: 'image/jpeg',
          });           

          // get the key 
          const photoKey = storageResponse.key;

          // update the user's profile picture
          const input = {
              id: userId,
              displayPhoto: photoKey,
          };

          // I think this needs to be changed to update the user's profile picture using their UserId
          await API.graphql(graphqlOperation(updateUsers, { input }));
          
          const response = await API.graphql(graphqlOperation(getUsers, { id: userId }));
          const dp = response.data.getUsers.displayPhoto;
          console.log("Updated DP for User: " + userId + " is: " + dp);
            

                // const email = response.data.getUsers.email;
          
        } catch (error) {
        console.error('Error uploading to S3 and database', error);
        }
    };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image" onPress={pickImage} />
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
