import { Text, View , StyleSheet, ScrollView, Button } from 'react-native';
import React, { useContext } from 'react';
import { Navigation } from '@mui/icons-material';

import Header from '../../components/header/Header.js';
import GroupCard from '../../components/groups/GroupCard.js';

import useGroupInfo from '../../hooks/useGroupActions.js';
import { UserContext } from '../../temporaryTestFiles/UserProvider.js'



export default function EntryProfileScreen() {
  const { userId } = useContext(UserContext);
  const {createNewGroup} = useGroupInfo(userId); 
  return (
      <View style = {{flex:1}}>
          <Header></Header>
          <ScrollView style = {styles.container}>
              <Button title = "Create Group" onPress = {() => createNewGroup()}></Button>
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
  