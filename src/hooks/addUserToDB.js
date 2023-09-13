import { API, graphqlOperation } from 'aws-amplify';
import { createUsers, createLike } from '../graphql/mutations';
import { Auth } from 'aws-amplify';
import { useEffect } from 'react';
import { onCreateUsers, onCreateLike } from '../graphql/subscriptions';


export const addUserToDB = (email, password, userSub, userAttributes, userInterests) => {
    useEffect(() => {
        // subscribe to new user creation
        const subscription = API.graphql(
            graphqlOperation(onCreateUsers), 
        ).subscribe({
            next: (data) => {
                const newUser = data.value.data.onCreateUsers;
                console.log("New user created: ", newUser);
            }
        });
        // like subscription
        const likeSubscription = API.graphql(
            graphqlOperation(onCreateLike), 
        ).subscribe({
            next: (data) => {
                const newLike = data.value.data.onCreateLike;
                console.log("New Like created: ", newLike);
            }
        });

        return () => {
            subscription.unsubscribe();
            likeSubscription.unsubscribe();
        }
    }, []);
    
    async function addUser() {
        try {
            const newUser = {
                id: userSub, 
                interests: userInterests,
                ...userAttributes
            };
            await API.graphql(graphqlOperation(createUsers, { input: newUser }));
            
            const newLike = {
                likerID: newUser.id,
                likes: [],
                matches: []
            };
            await API.graphql(graphqlOperation(createLike, { input: newLike }));

            await loginToNewAccount();
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
        addUser
    };
};
