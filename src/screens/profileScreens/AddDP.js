import React, { useState } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Storage } from 'aws-amplify';

export default function ImageUploadScreen() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
      uploadToS3(result.uri);
    }
  };

  const uploadToS3 = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    
    try {
      await Storage.put('stewie.jpg', blob, {
        level: 'public',
        contentType: 'image/jpeg',
      });
      alert('Successfully uploaded file!');
    } catch (error) {
      console.error('Error uploading to S3', error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image" onPress={pickImage} />
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
