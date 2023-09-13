import * as React from 'react';
import { StyleSheet, Text} from 'react-native';
import { List, MD3Colors } from 'react-native-paper';

import { UserContext } from '../../temporaryTestFiles/UserProvider.js';
import useFriendActions from '../../hooks/useFriendActions.js';
import { API, graphqlOperation } from 'aws-amplify';
import { getUsers } from '../../graphql/queries.js';

export default function BasicInfoPanel() {
  const { userId ,userEmail, userName, userAge, userJob, userSchool } = React.useContext(UserContext);

  const { userFriends } = useFriendActions(userId);

  const [friendDetails, setFriendDetails] = React.useState([]);

  React.useEffect(() => {
    async function fetchFriends() {
        const details = [];

        for (const id of userFriends) {
            const data = await API.graphql(graphqlOperation(getUsers, { id }));
            if (data && data.data && data.data.getUsers) {
                details.push(data.data.getUsers);
            }
        }

        setFriendDetails(details);
    }

    fetchFriends();
}, [userFriends]);


  return (
    <List.Section style = {styles.container}>

        {/* <List.Item title= {user.location} left={() => <List.Icon icon="map-marker" />} /> */}
        

        <List.Item title= {userJob} left={() => <List.Icon icon="briefcase" />} />

        <List.Item
          title= {userSchool}
          left={() => <List.Icon color={MD3Colors.tertiary70} icon="school" />}
        />

        <Text>Friends:</Text>
        {
            friendDetails.map(friend => (
                <List.Item 
                    key={friend.id} 
                    title={`${friend.name} (${friend.id})`} 
                    left={() => <List.Icon icon="account-multiple" />} 
                />
            ))
        }


    </List.Section>
  )

}

// const BasicInfoPanel = () => (
  
  // <List.Section style = {styles.container}>

  //   {/* <List.Subheader>About Max</List.Subheader> */}

  //   <List.Item title="Software Engineer @ BWS" left={() => <List.Icon icon="briefcase" />} />

  //   <List.Item
  //     title="University of British Columbia"
  //     left={() => <List.Icon color={MD3Colors.tertiary70} icon="school" />}
  //   />


  // </List.Section>
// );

// export default BasicInfoPanel;

const styles =  StyleSheet.create({
    container: {
        alignItems: 'left',
        padding: 15,
        // backgroundColor: 'red',
    }

});