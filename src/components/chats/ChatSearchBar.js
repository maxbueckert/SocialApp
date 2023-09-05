import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { View } from 'react-native';

const ChatSearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style = {{padding: 10}}>
    <Searchbar
      placeholder="Search Chats"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </View>
  );
};

export default ChatSearchBar;