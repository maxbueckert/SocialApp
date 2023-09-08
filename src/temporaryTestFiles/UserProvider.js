import { createContext } from 'react';
import React, { useState , useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getUsers } from '../graphql/queries';
import { Auth } from 'aws-amplify';
import { SignalCellularNullSharp } from '@mui/icons-material';




export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState(0);
  const [userJob, setUserJob] = useState('');
  const [userSchool, setUserchool] = useState('');
  const [userDisplayPhoto, setUserDisplayPhoto] = useState(null);
  const [userVersion, setUserVersion] = useState(0);

  useEffect(() => {
      const fetchUserEmail = async () => {
          try {
              // Get the logged-in user's ID (you may need to adjust based on your auth setup)
              const userInfo = await Auth.currentAuthenticatedUser();
              const userId = userInfo.attributes.sub; 

              console.log('Api call issue');
              // console.log(userInfo);

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
              const displayPhoto = response.data.getUsers.displayPhoto;
              const version = response.data.getUsers._version;

              setUserId(id);
              setUserEmail(email);
              setUserName(name);
              setUserAge(age);
              setUserJob(job);
              setUserchool(school);
              setUserDisplayPhoto(displayPhoto);
              setUserVersion(version);

              console.log(email);
              console.log(name);
              console.log(age);
              console.log(job);
              console.log(school);
              console.log(displayPhoto);
              console.log(version);


          } catch (error) {
              console.error("Error fetching user's email:", error);
          }
      };

      fetchUserEmail();
  }, []);


  return (
    <UserContext.Provider value={{userId, userEmail, userName, userAge, userJob, userSchool, userDisplayPhoto, setUserDisplayPhoto, userVersion, setUserVersion }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
