import { useState, useEffect } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createUsers, createLike } from '../graphql/mutations';
import { onCreateLike, onCreateUsers } from '../graphql/subscriptions';

const useSignUpActions = (email, password, userSubFromRoute) => {
    const [userSub, setUserSub] = useState(userSubFromRoute);
    const [userName, setUserName] = useState(null);
    const [userAge, setUserAge] = useState(0);
    const [userGender, setUserGender] = useState(null);
    const [userJob, setUserJob] = useState(null);
    const [userSchool, setUserSchool] = useState(null);
    const [userInterests, setUserInterests] = useState(null);

    useEffect(() => {
        // Set up subscription to listen for new user creation
        const userSubscription = API.graphql(
          graphqlOperation(onCreateUsers)
        ).subscribe({
          next: (data) => {
            console.log('New user created via subscription:', data);
            // Handle the new user data as needed
          },
          error: (error) => {
            console.error('User subscription error:', error);
          }
        });
    
        // Set up subscription to listen for new like creation
        const likeSubscription = API.graphql(
          graphqlOperation(onCreateLike)
        ).subscribe({
          next: (data) => {
            console.log('New like created via subscription:', data);
            // Handle the new like data as needed
          },
          error: (error) => {
            console.error('Like subscription error:', error);
          }
        });
    
        // Clean up subscriptions on unmount
        return () => {
          userSubscription.unsubscribe();
          likeSubscription.unsubscribe();
        };
    
      }, []);


    async function addToDatabase() {
        try {
            // Add User entry to DB
            const newUser = {
                id: userSub, 
                name: userName,
                email: email,
                age: parseInt(userAge),
                gender: userGender,
                job: userJob,
                school: userSchool,
                interests: userInterests,
                friends: [], 
                incomingFriendRequests: [],
                outgoingFriendRequests: []
            };
            await API.graphql(graphqlOperation(createUsers, { input: newUser }));

            // Add Like entry for user to DB
            const newLike = {
                likerID: newUser.id,
                likes: [], 
                matches: [] 
            };
            await API.graphql(graphqlOperation(createLike, { input: newLike }));

            loginToNewAccount();

        } catch (error) {
            console.error("Error adding user to the database", error);
        }
    }

    async function loginToNewAccount() {
        try {
            const user = await Auth.signIn(email, password);
            if (user && user.signInUserSession.isValid()) {
                console.log('User is authenticated:', user);
                return true; 
            } else {
                console.error('User could not be authenticated');
                return false;
            }
        } catch (error) {
            console.error('Authentication error:', error);
            return false;
        }
    }

    return {
        userSub, setUserSub,
        userName, setUserName,
        userAge, setUserAge,
        userGender, setUserGender,
        userJob, setUserJob,
        userSchool, setUserSchool,
        userInterests, setUserInterests,
        addToDatabase
    };
};

export default useSignUpActions;
