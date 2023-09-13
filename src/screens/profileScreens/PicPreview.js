import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button } from 'react-native';
import { API, graphqlOperation, Storage, Auth } from 'aws-amplify';
import { getUsers } from '../../graphql/queries';


export default function PicPreview({ navigation }) {
    const [imageUrl, setImageUrl] = useState(null);

    const fetchImage = async () => {
        try {
            const userInfo = await Auth.currentAuthenticatedUser();
            const userId = userInfo.attributes.sub;
            
            // Retrieve the displayPhoto key from the database
            const response = await API.graphql(graphqlOperation(getUsers, { id: userId }));
            const photoKey = response.data.getUsers.displayPhoto;

            // Retrieve the signed URL for the image from S3
            // const signedUrl = await Storage.get(photoKey, { level: 'public' });

            setImageUrl(signedUrl);
        } catch (error) {
            console.error('Error fetching image', error);
        }
    };

    useEffect(() => {
        // fetchImage();
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {imageUrl ? (
                <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
            ) : (
                <Text>Loading...</Text>
            )}
            <Button title="Refresh Image" onPress={fetchImage} />
        </View>
    );
}
