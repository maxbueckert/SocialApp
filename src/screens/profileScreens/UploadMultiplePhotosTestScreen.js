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
    const [selectedImages, setSelectedImages] = useState([]);
    const {userId, userPhotos, setUserPhotos, userDisplayPhoto, setUserDisplayPhoto, userVersion, setUserVersion} = useContext(UserContext);
    // const [toDisplay, setToDisplay] = useState(userPhotos)
    const [isUploading, setIsUploading] = useState(false);


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
        setSelectedImages(prevSelectedImages => [...prevSelectedImages, selectedUri]);
        uploadToS3(userId, selectedUri);
      }
    };

    const uploadToS3 = async (userId, uri) => {
       setIsUploading(true);
        const response = await fetch(uri);
        const blob = await response.blob();

        // Generate a unique filename

        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }

        // const uniqueFileName = `image_${new Date().toISOString()}.jpg`;
        const uniqueFileName = `image_${getRandomInt(0, 900000)}.jpg`;
        console.log("unique file name: " + uniqueFileName);
        
        
        try {
          const storageResponse = await Storage.put(uniqueFileName, blob, {
              level: 'public',
              contentType: 'image/jpeg',
          });           

          // get the key 
          const photoKey = storageResponse.key;
          console.log("S3 key: " + photoKey);

          // update the new photo to database
          const input = {
              id: userId,
              photos: userPhotos? [...userPhotos, photoKey] : [photoKey],
              _version: userVersion,
          };

          console.log("adding to database");

          await API.graphql(graphqlOperation(updateUsers, { input }));
          

          console.log("added to database");

          // NEED TO INCREASE USER VERSION!!!
          setUserVersion(userVersion + 1);

          // edit UserContext to add new photo
          if (userPhotos) {
            setUserPhotos(prevUserPhotos => [...prevUserPhotos, photoKey]);
          } else {
            setUserPhotos([photoKey]);
          }
          setIsUploading(false);


                // const email = response.data.getUsers.email;
          
        } catch (error) {
        console.error('Error uploading to S3 and database', error);
        setIsUploading(false);
        }
    };

  return (
    <ScrollView style ={{padding : 100}}>
      {selectedImages.map((image, key) => (
        <Image key={key} source={{ uri: image }} style={{ width: 200, height: 200 }} />
        ))}

      <Button title="add image" onPress={pickImage} disabled={isUploading} />
       
    </ScrollView>
  );
}
