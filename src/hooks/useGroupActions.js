import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import { getUsers } from '../graphql/queries.js';
import { onUpdateUsers, onCreateGroup } from '../graphql/subscriptions.js';
import { updateUsers, createGroup } from '../graphql/mutations';

const useGroupInfo = (userId) => {

    useEffect(() => {
        // subscribe to updates to users
        const subscription = API.graphql(
            graphqlOperation(onCreateGroup)
            ).subscribe({
                next: (data) => {
                    
                }
            });

        // Subscribe when the component mounts
        const UserSubscription = API.graphql(
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
                UserSubscription.unsubscribe();
            };
        }, []);

    // function to create group
    async function createNewGroup(id = null) {
        const targetId = id || userId; 
        console.log("Creating group for user:", targetId)
        try {
                const groupDetails = {
                    creator: targetId
                    // Add any other required fields or optional ones as needed
                };
                const result = await API.graphql(graphqlOperation(createGroup, { input: groupDetails }));
                console.log("Group Created:", result);

                // get group id
                const groupId = result.data.createGroup.id;
                const user = await API.graphql(graphqlOperation(getUsers, { id: targetId }));
                await API.graphql(graphqlOperation(updateUsers, { input: { id: targetId, groups: groupId, _version: user.data.getUsers._version }}));
                
            } catch (error) {
                console.log(error);
            }
        }

    return { 
        createNewGroup 
    };

}

export default useGroupInfo;