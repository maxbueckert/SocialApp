import { Text, View , StyleSheet, ScrollView} from 'react-native';

import Header from '../../components/header/Header.js';
import GroupCard from '../../components/groups/GroupCard.js';
import addUserAttributes from '../../hooks/addUserAttribute.js';
import { Button } from 'react-native-paper';
import { useEffect } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { getUsers } from '../../graphql/queries';

export default function EntryProfileScreen() {
  const [addUserAttribute, loading, error] = addUserAttributes();  

  useEffect(() => {
    const updateAttribute = async () => {
        try {
            await updateUserAttribute('Hiking');  // <-- Corrected this line
              
            const userInfo = await Auth.currentAuthenticatedUser();
            const userId = userInfo.attributes.sub;
      
            // Fetch the current interests array from the database
            const response = await API.graphql(graphqlOperation(getUsers, { id: userId }));
            const currentInterests = response.data.getUsers.interests || [];
            console.log(currentInterests);
        } catch (err) {
            console.error(err);
        }
    };

    updateAttribute();
}, []); 
 // Empty dependency array to run this effect once when the component mounts

  return (
      <View style = {{flex:1}}>
          <Header></Header>
          <ScrollView style = {styles.container}>
              <GroupCard></GroupCard>
              <GroupCard></GroupCard>
              <GroupCard></GroupCard>
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
  