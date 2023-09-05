import * as React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const GroupCard = () => (
<View style = {{margin: 10}}>
  <Card>

    <Card.Content>
      <Text variant="titleLarge">Seal Team Six</Text>
      <Text variant="bodyMedium">Max, Alberto, Jared </Text>
    </Card.Content>

    <Card.Cover source={{ uri: 'https://picsum.photos/720' }} />

    <Card.Actions>
      <Button>Leave</Button>
      <Button>View</Button>
    </Card.Actions>

   </Card>
  </View>
);

export default GroupCard;