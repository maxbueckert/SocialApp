import * as React from 'react';
import { StyleSheet} from 'react-native';
import { List, MD3Colors } from 'react-native-paper';

const InterestsPanel = () => (
  <List.Section style = {styles.container}>
    <List.Subheader>About Max</List.Subheader>
    <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
    <List.Item
      title="Second Item"
      left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}
    />
  </List.Section>
);

export default InterestsPanel;

const styles =  StyleSheet.create({
    container: {
        alignItems: 'left',
        padding: 15,
        backgroundColor: 'red',
    }

});