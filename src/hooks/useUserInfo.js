import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import { getUsers } from '../graphql/queries.js';
import { onUpdateUsers } from '../graphql/subscriptions.js';
import { updateUsers } from '../graphql/mutations';

const useUserInfo = (userId) => {
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        // Subscribe when the component mounts
        const subscription = API.graphql(
            graphqlOperation(onUpdateUsers, {
                filter: {
                    id: {
                        eq: userId
                    }
                }
            })
        ).subscribe({
            next: (data) => {
                
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    // returns the email of user by id. If no id is provided, returns the email of the current user.
    async function getEmail(id = null) {
        const targetId = id || userId; 
        try {
            const response = await API.graphql(graphqlOperation(getUsers, { id: targetId }));
            const email = response.data.getUsers.email;
            return email;
        } catch (error) {
            console.log(error);
        }
    }

    // returns the name of user by id. If no id is provided, returns the name of the current user.
    async function getGroups(id = null) {
        const targetId = id || userId; 
        try {
            const response = await API.graphql(graphqlOperation(getUsers, { id: targetId }));
            const groups = response.data.getUsers.groups;
            return groups;
        } catch (error) {
            console.log(error);
        }
    }

    // function to get incoming group invites
        async function getIncomingGroupInvites(id = null) {
            const targetId = id || userId;
                try {
                    const response = await API.graphql(graphqlOperation(getUsers, { id: targetId }));
                    const groups = response.data.getUsers.incomingGroupInvites;
                    return groups;
                } catch (error) {
                    console.log(error);
                }
        }
    

    // returns the name of user by id. If no id is provided, returns the name of the current user.
    async function getName(id = null) {
        const targetId = id || userId; 
        try {
            const response = await API.graphql(graphqlOperation(getUsers, { id: targetId }));
            const name = response.data.getUsers.name;
            return name;
        } catch (error) {
            console.log(error);
        }
    }

    // returns the age of user by id. If no id is provided, returns the age of the current user.
    async function getAge(id = null) {
        const targetId = id || userId; 
        try {
            const response = await API.graphql(graphqlOperation(getUsers, { id: targetId }));
            const age = response.data.getUsers.age;
            return age;
        } catch (error) {
            console.log(error);
        }
    }

    // returns the job of user by id. If no id is provided, returns the job of the current user.
    async function getJob(id = null) {
        const targetId = id || userId; 
        try {
            const response = await API.graphql(graphqlOperation(getUsers, { id: targetId }));
            const job = response.data.getUsers.job;
            return job;
        } catch (error) {
            console.log(error);
        }
    }

    // returns the school of user by id. If no id is provided, returns the school of the current user.
    async function getSchool(id = null) {
        const targetId = id || userId; 
        try {
            const response = await API.graphql(graphqlOperation(getUsers, { id: targetId }));
            const school = response.data.getUsers.school;
            return school;
        } catch (error) {
            console.log(error);
        }
    }

    // returns the interests of user by id. If no id is provided, returns the interests of the current user.
    async function getInterests(id = null) {
        const targetId = id || userId; 
        try {
            const response = await API.graphql(graphqlOperation(getUsers, { id: targetId }));
            const interests = response.data.getUsers.interests;
            return interests;
        } catch (error) {
            console.log(error);
        }
    }

    // returns the friends of the user by id. If no id is provided, returns the friends of the current user.
    async function getFriends(id = null) {
        const targetId = id || userId; 
        try {
            const response = await API.graphql(graphqlOperation(getUsers, { id: targetId }));
            const friends = response.data.getUsers.friends;
            return friends;
        } catch (error) {
            console.log(error);
        }
    }

    // function to change name of user by id. If no id is provided, changes the name of the current user.
    async function changeName(name, id = null) {
        const targetId = id || userId; 
        const user = await API.graphql(graphqlOperation(getUsers, { id: targetId }));
        try {
            await API.graphql(graphqlOperation(updateUsers, { input: { id: targetId, name: name, _version: user.data.getUsers._version }}));
        } catch (error) {
            console.log(error);
        }
    }

    // function to change age of user by id. If no id is provided, changes the age of the current user.
    async function changeAge(age, id = null) {
        const targetId = id || userId; 
        const user = await API.graphql(graphqlOperation(getUsers, { id: targetId }));
        try {
            await API.graphql(graphqlOperation(updateUsers, { input: { id: targetId, age: age, _version: user.data.getUsers._version }}));
        } catch (error) {
            console.log(error);
        }
    }

    // function to change job of user by id. If no id is provided, changes the job of the current user.
    async function changeJob(job, id = null) {
        const targetId = id || userId; 
        const user = await API.graphql(graphqlOperation(getUsers, { id: targetId }));
        try {
            await API.graphql(graphqlOperation(updateUsers, { input: { id: targetId, job: job, _version: user.data.getUsers._version }}));
        } catch (error) {
            console.log(error);
        }
    }

    // function to change school of user by id. If no id is provided, changes the school of the current user.
    async function changeSchool(school, id = null) {
        const targetId = id || userId; 
        const user = await API.graphql(graphqlOperation(getUsers, { id: targetId }));
        try {
            await API.graphql(graphqlOperation(updateUsers, { input: { id: targetId, school: school, _version: user.data.getUsers._version }}));
        } catch (error) {
            console.log(error);
        }
    }

    // function to add to users interests by id. If no id is provided, adds to the interests of the current user.
    async function addInterest(interest, id = null) {
        const targetId = id || userId; 
        const user = await API.graphql(graphqlOperation(getUsers, { id: targetId }));
        const interests = user.data.getUsers.interests;
        interests.push(interest);
        try {
            await API.graphql(graphqlOperation(updateUsers, { input: { id: targetId, interests: interests, _version: user.data.getUsers._version }}));
        } catch (error) {
            console.log(error);
        }
    }

    // function to remove from users interests by id. If no id is provided, removes from the interests of the current user.
    async function removeInterest(interestToRemove, id = null) {
        const targetId = id || userId; 
        const user = await API.graphql(graphqlOperation(getUsers, { id: targetId }));
        const interests = user.data.getUsers.interests;
        const updatedInterests = interests.filter(interest => interest !== interestToRemove);  // Change variable name here
        try {
            await API.graphql(graphqlOperation(updateUsers, { input: { id: targetId, interests: updatedInterests, _version: user.data.getUsers._version }}));
        } catch (error) {
            console.log(error);
        }
    }
    
    return { 
        getEmail,
        getName,
        getAge,
        getJob,
        getSchool,
        getInterests,
        getFriends,
        getGroups,
        getIncomingGroupInvites,
        changeName,
        changeAge,
        changeJob,
        changeSchool,
        addInterest,
        removeInterest,
    };

}

export default useUserInfo;