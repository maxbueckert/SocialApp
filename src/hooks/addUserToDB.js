import { API, graphqlOperation } from 'aws-amplify';
import { createUsers, createLike } from '../graphql/mutations';
import { Auth } from 'aws-amplify';

export const addUserToDB = (email, password, userSub, userAttributes, userInterests) => {
    async function addUser() {
        try {
            const newUser = {
                id: userSub, 
                interests: userInterests,
                ...userAttributes
            };
            await API.graphql(graphqlOperation(createUsers, { input: newUser }));
            
            console.log("created new User: " + newUser);

            const newLike = {
                likerID: newUser.id,
                likes: [],
                matches: []
            };
            await API.graphql(graphqlOperation(createLike, { input: newLike }));
            console.log("created new Like for User: " + newLike);

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
