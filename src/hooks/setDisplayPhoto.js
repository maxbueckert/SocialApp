// import { Storage } from 'aws-amplify';
// import { Auth, API, graphqlOperation } from 'aws-amplify';
// import { updateUsers } from '../graphql/mutations';
// import { getUsers } from '../graphql/queries';
// import * as ImagePicker from 'expo-image-picker';


// export default async function setDisplayPhoto(setUserDisplayPhoto) {
//         try {
//             const storageResponse = await Storage.put(uniqueFileName, blob, {
//                 level: 'public',
//                 contentType: 'image/jpeg',
//             });           

//             // get the key 
//             const photoKey = storageResponse.key;

//             // update the user's profile picture
//             const input = {
//                 id: userId,
//                 displayPhoto: photoKey,
//             };

//             // I think this needs to be changed to update the user's profile picture using their UserId
//             await API.graphql(graphqlOperation(updateUsers, { input }));
            
//             const response = await API.graphql(graphqlOperation(getUsers, { id: userId }));
//             const dp = response.data.getUsers.displayPhoto;
//             setUserDisplayPhoto(dp);

//             console.log("Updated DP for User: " + userId + " is: " + dp);



//                 // const email = response.data.getUsers.email;
            
//         } catch (error) {
//         console.error('Error uploading to S3 and database', error);
//         }
// };
