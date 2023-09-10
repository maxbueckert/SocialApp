import { createContext } from 'react';
import React, { useState , useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getUsers } from '../graphql/queries';
import { Auth } from 'aws-amplify';
import { Navigation, SignalCellularNullSharp } from '@mui/icons-material';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState(0);
  const [userJob, setUserJob] = useState('');
  const [userSchool, setUserchool] = useState('');
  const [userDisplayPhoto, setUserDisplayPhoto] = useState(null);
  const [userInterests, setUserInterests] = useState([])
  const [userPhotos, setUserPhotos] = useState([]);
  const [userVersion, setUserVersion] = useState(0);

  // useEffect(() => {
      const fetchUserEmail = async () => {
          try {
              // Get the logged-in user's ID (you may need to adjust based on your auth setup)
              const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
              const userId = userInfo.attributes.sub; 

              // Fetch user's email using GraphQL
              const response = await API.graphql(graphqlOperation(getUsers, { id: userId }));
              console.log("User ID from Auth.currentAuthenticatedUser():", userId);
              console.log("response: " + response);

              const id = response.data.getUsers.id;
              const email = response.data.getUsers.email;
              const name = response.data.getUsers.name;
              const age = response.data.getUsers.age;
              const job = response.data.getUsers.job;
              const school = response.data.getUsers.school;
              const interests = response.data.getUsers.interests;
              const displayPhoto = response.data.getUsers.displayPhoto;
              const photos = response.data.getUsers.photos;
              const _version = response.data.getUsers._version;

              setUserId(id);
              setUserEmail(email);
              setUserName(name);
              setUserAge(age);
              setUserJob(job);
              setUserchool(school);
              setUserDisplayPhoto(displayPhoto);
              setUserInterests(!interests? [] : interests);
              setUserPhotos(!photos? [] : photos);
              setUserVersion(_version);

            console.log("email: " + email);
            console.log("name: " + name);
            console.log("age: " + age);
            console.log("job: " + job);
            console.log("school: " + school);
            console.log("displayPhoto: " + displayPhoto);
            console.log("interests: " + interests);
            console.log("photos: " + photos);
            console.log("_version: " + _version);


          } catch (error) {
              console.error("Error fetching user's info from database for use in UserContext:", error);

          }
      };


      useEffect(() => {
        const checkUserAuth = async () => {
            try {
                const session = await Auth.currentSession();
                if (session) {
                    fetchUserEmail();
                }
            } catch (error) {
                console.log("No authenticated session found, i.e. user not signed in, in UserContext:", error);
            }
        };

        checkUserAuth();
    }, []);

  return (
    <UserContext.Provider value={{userId, userEmail, userName, userAge, userJob, userSchool, userDisplayPhoto, setUserDisplayPhoto, userVersion, setUserVersion, userInterests , userPhotos, setUserPhotos}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
