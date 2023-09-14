import { Text, View , StyleSheet, ScrollView, Button } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Navigation } from '@mui/icons-material';

import Header from '../../components/header/Header.js';

import useGroupInfo from '../../hooks/useGroupActions.js';
import getGroups from '../../hooks/useUserInfo.js';
import { UserContext } from '../../temporaryTestFiles/UserProvider.js'
import useUserInfo from '../../hooks/useUserInfo.js';



export default function EntryProfileScreen() {
  const { userId } = useContext(UserContext);
  const {createNewGroup, inviteUserToGroup, acceptGroupInvite, declineGroupInvite} = useGroupInfo(userId); 
  const { getGroups, getIncomingGroupInvites } = useUserInfo(userId);

  const [groups, setGroups] = useState([]);
  const [incomingGroupInvites, setIncomingGroupInvites] = useState([]);

  useEffect(() => {
    async function fetchGroups() {
        const fetchedGroups = await getGroups();
        setGroups(fetchedGroups);
        const fetchedIncomingGroupInvites = await getIncomingGroupInvites();
        setIncomingGroupInvites(fetchedIncomingGroupInvites);
    }

    fetchGroups();
}, []);


return (
  <View style={{ flex: 1 }}>
      <Header></Header>
      <ScrollView style={styles.container}>
          <Button title="Create Group" onPress={() => createNewGroup()}></Button>
          <Text>Your Groups</Text>
          {/* list of groups if any */}
          {groups.map(group => (
              <View key={group.id} style={styles.groupContainer}>
                  <Text>{group}</Text>
                  <Button
                      title="invite berto to group"
                      onPress={() => inviteUserToGroup(group, "b8d17350-3071-7080-633b-636a8f20b832")}
                  />
              </View>
          ))}
          <Text>Incoming Group Invites</Text>
          {/* list of incoming group invites if any */}
          {incomingGroupInvites.map(group => (
              <View key={group.id} style={styles.groupContainer}>
                  <Text>{group}</Text>
                  <Button title="Accept Group Invite" onPress={() => acceptGroupInvite(group)} />
                  <Button title="Decline Group Invite" onPress={() => declineGroupInvite(group)} />
              </View>
          ))}
      </ScrollView>
  </View>
);
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
  });
  