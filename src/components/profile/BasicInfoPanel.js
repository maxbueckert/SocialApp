import * as React from 'react';
import { StyleSheet } from 'react-native';
import { List, MD3Colors } from 'react-native-paper';

import { UserContext } from '../../temporaryTestFiles/UserProvider.js';

export default function BasicInfoPanel() {
  const { userJob, userSchool } = React.useContext(UserContext);


  return (
    <List.Section style = {styles.container}>

        <List.Item title= {userJob} left={() => <List.Icon icon="briefcase" />} />

        <List.Item
          title= {userSchool}
          left={() => <List.Icon color={MD3Colors.tertiary70} icon="school" />}
        />
    </List.Section>
  );
}

const styles =  StyleSheet.create({
    container: {
        alignItems: 'left',
        padding: 15,
        // backgroundColor: 'red',
    }

});