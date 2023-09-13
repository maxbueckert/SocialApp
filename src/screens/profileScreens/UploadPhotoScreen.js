import { Text, View , StyleSheet, ScrollView, Button} from 'react-native';

import Header from '../../components/header/Header.js';
import GroupCard from '../../components/groups/GroupCard.js';
import { Navigation } from '@mui/icons-material';

import React, { useState , useContext } from 'react';
import { Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Storage } from 'aws-amplify';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { updateUsers } from '../../graphql/mutations';
import { getUsers } from '../../graphql/queries';
import { UserContext } from '../../temporaryTestFiles/UserProvider.js'
import { deepPurple } from '@mui/material/colors';


export default function UploadPhotoScreen({navigation}) {
    const [selectedImage, setSelectedImage] = useState(null);
    const {userId, setUserDisplayPhoto, userVersion, setUserVersion} = useContext(UserContext);

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
        // const userInfo = await Auth.currentAuthenticatedUser();
        // const userId = userInfo.attributes.sub;
        setSelectedImage(selectedUri);
        uploadToS3(userId, selectedUri);
      }
    };

    const uploadToS3 = async (userId, uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();

        // Generate a unique filename

        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }

        // const uniqueFileName = `image_${new Date().toISOString()}.jpg`;
        const uniqueFileName = `image_${getRandomInt(0, 10000)}.jpg`;
        console.log("unique file name: " + uniqueFileName);
        
        
        try {
          // const storageResponse = await Storage.put(uniqueFileName, blob, {
          //     level: 'public',
          //     contentType: 'image/jpeg',
          // });           

          // get the key 
          // const photoKey = storageResponse.key;
          console.log("S3 key: " + photoKey);

          // update the user's profile picture
          const input = {
              id: userId,
              displayPhoto: uniqueFileName,
              _version: userVersion,
          };

          // I think this needs to be changed to update the user's profile picture using their UserId
          await API.graphql(graphqlOperation(updateUsers, { input }));
          
          const response = await API.graphql(graphqlOperation(getUsers, { id: userId }));
          const dp = response.data.getUsers.displayPhoto;

          console.log("table key: " + dp);
          console.log("Updated DP for User: " + userId + " is: " + dp);
          setUserVersion(userVersion + 1);


          setUserDisplayPhoto(uniqueFileName);

    

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
