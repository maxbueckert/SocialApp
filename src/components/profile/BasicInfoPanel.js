import * as React from 'react';
import { StyleSheet} from 'react-native';
import { List, MD3Colors } from 'react-native-paper';

const BasicInfoPanel = () => (
  <List.Section style = {styles.container}>

    {/* <List.Subheader>About Max</List.Subheader> */}

    <List.Item title="Software Engineer @ BWS" left={() => <List.Icon icon="briefcase" />} />

    <List.Item
      title="University of British Columbia"
      left={() => <List.Icon color={MD3Colors.tertiary70} icon="school" />}
    />


  </List.Section>
);

export default BasicInfoPanel;

const styles =  StyleSheet.create({
    container: {
        alignItems: 'left',
        padding: 15,
        // backgroundColor: 'red',
    }

});