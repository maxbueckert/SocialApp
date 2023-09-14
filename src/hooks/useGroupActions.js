import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import { getUsers, getGroup } from '../graphql/queries.js';
import { onUpdateUsers, onCreateGroup, onUpdateGroup } from '../graphql/subscriptions.js';
import { updateUsers, createGroup, updateGroup } from '../graphql/mutations';

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
        // subscribe to updates to groups
        const GroupSubscription = API.graphql(
            graphqlOperation(onUpdateGroup)
            ).subscribe({
                next: (data) => {
                }
            });

            return () => {
                subscription.unsubscribe();
                UserSubscription.unsubscribe();
                GroupSubscription.unsubscribe();
            };
        }, []);

    // function to create group for user
    async function createNewGroup(id = null) {
        const targetId = id || userId; 
        try {
                const result = await API.graphql(graphqlOperation(createGroup, { input: { creator: targetId, members: targetId, outgoingInvites: [] } }));
                // get group id
                const user = await API.graphql(graphqlOperation(getUsers, { id: targetId }));
                const groups = user.data.getUsers.groups;
                groups.push(result.data.createGroup.id);
                await API.graphql(graphqlOperation(updateUsers, { input: { id: targetId, groups: groups, _version: user.data.getUsers._version }}));

            } catch (error) {
                console.log(error);
            }
        }

    // function to invite user to group
    async function inviteUserToGroup(groupId, id = null) {
        const targetId = id || userId; 
            try {
                const groupData = await API.graphql(graphqlOperation(getGroup, { id: groupId }));
                const ogoingInvites = groupData.data.getGroup.outgoingInvites;
                ogoingInvites.push(targetId);
                await API.graphql(graphqlOperation(updateGroup, { input: { id: groupId, outgoingInvites: ogoingInvites, _version: groupData.data.getGroup._version }}));

                const user = await API.graphql(graphqlOperation(getUsers, { id: targetId }));
                const incomingGroupInvites = user.data.getUsers.incomingGroupInvites;
                incomingGroupInvites.push(groupId);
                await API.graphql(graphqlOperation(updateUsers, { input: { id: targetId, incomingGroupInvites: incomingGroupInvites, _version: user.data.getUsers._version }}));
            } catch (error) {
                console.log(error);
            }
    }

    // function to accept group invite 
    async function acceptGroupInvite(groupId, id = null) {
        const targetId = id || userId;
            try {
                const groupData = await API.graphql(graphqlOperation(getGroup, { id: groupId }));
                const members = groupData.data.getGroup.members;
                members.push(targetId);
                const outgoingInvites = groupData.data.getGroup.outgoingInvites;
                const updatedInvites = outgoingInvites.filter(invite => invite !== targetId);
                await API.graphql(graphqlOperation(updateGroup, { input: { id: groupId, members: members, outgoingInvites: updatedInvites, _version: groupData.data.getGroup._version }}));

                const user = await API.graphql(graphqlOperation(getUsers, { id: targetId }));
                const groups = user.data.getUsers.groups;
                groups.push(groupId);
                const incomingGroupInvites = user.data.getUsers.incomingGroupInvites;
                const updatedIncomingGroupInvites = incomingGroupInvites.filter(invite => invite !== groupId);
                await API.graphql(graphqlOperation(updateUsers, { input: { id: targetId, groups: groups, incomingGroupInvites: updatedIncomingGroupInvites, _version: user.data.getUsers._version }}));

            } catch (error) {
                console.log(error);
            }
    }

    async function declineGroupInvite(groupId, id = null) {
        const targetId = id || userId;
            try {
                const groupData = await API.graphql(graphqlOperation(getGroup, { id: groupId }));
                const outgoingInvites = groupData.data.getGroup.outgoingInvites;
                const updatedInvites = outgoingInvites.filter(invite => invite !== targetId);
                await API.graphql(graphqlOperation(updateGroup, { input: { id: groupId, outgoingInvites: updatedInvites, _version: groupData.data.getGroup._version }}));

                const user = await API.graphql(graphqlOperation(getUsers, { id: targetId }));
                const incomingGroupInvites = user.data.getUsers.incomingGroupInvites;
                const updatedIncomingGroupInvites = incomingGroupInvites.filter(invite => invite !== groupId);
                await API.graphql(graphqlOperation(updateUsers, { input: { id: targetId, incomingGroupInvites: updatedIncomingGroupInvites, _version: user.data.getUsers._version }}));
            } catch (error) {
                console.log(error);
            }
    }

    //function to remove user from group
    async function removeUserFromGroup(groupId, id = null) {
        const targetId = id || userId;
            try {
                const groupData = await API.graphql(graphqlOperation(getGroup, { id: groupId }));
                const members = groupData.data.getGroup.members;
                const updatedMembers = members.filter(member => member !== targetId);
                await API.graphql(graphqlOperation(updateGroup, { input: { id: groupId, members: updatedMembers, _version: groupData.data.getGroup._version }}));

                const user = await API.graphql(graphqlOperation(getUsers, { id: targetId }));
                const groups = user.data.getUsers.groups;
                const updatedGroups = groups.filter(group => group !== groupId);
                await API.graphql(graphqlOperation(updateUsers, { input: { id: targetId, groups: updatedGroups, _version: user.data.getUsers._version }}));
                
            } catch (error) {
                console.log(error);
            }   
    }

    

    

    return { 
        createNewGroup,
        inviteUserToGroup,
        acceptGroupInvite,
        declineGroupInvite,
        removeUserFromGroup
    };

}

export default useGroupInfo;