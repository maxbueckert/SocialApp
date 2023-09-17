import { View , StyleSheet, ScrollView } from 'react-native';

import Header from '../../components/header/Header.js';
import ChatSearchBar from '../../components/chats/ChatSearchBar.js';

export default function EntryChatsScreen() {

    return (
        <View style={{flex:1}}>
            <Header></Header>
            <ChatSearchBar></ChatSearchBar>
            <ScrollView style={styles.container}>
                {/* Display the email here */}
                {/* <Text>{userEmail}</Text> */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
    },
});
