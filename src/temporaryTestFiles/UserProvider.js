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
              const _version = response.data.getUsers._version;

              setUserId(id);
              setUserEmail(email);
              setUserName(name);
              setUserAge(age);
              setUserJob(job);
              setUserchool(school);
              setUserDisplayPhoto(displayPhoto);
              setUserInterests(interests);
              setUserVersion(_version);

              console.log(email);
              console.log(name);
              console.log(age);
              console.log(job);
              console.log(school);
              console.log(displayPhoto);
              console.log(_version);


          } catch (error) {
              console.error("Error fetching user's info from database after successfully signing in:", error);

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
                console.log("No authenticated session found, i.e. user not signed in:", error);
            }
        };

        checkUserAuth();
    }, []);

  return (
    <UserContext.Provider value={{userId, userEmail, userName, userAge, userJob, userSchool, userDisplayPhoto, setUserDisplayPhoto, userVersion, setUserVersion, userInterests }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
