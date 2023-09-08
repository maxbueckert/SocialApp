import React, { useState } from 'react';
import { View, Button, Alert , Text} from 'react-native';
import { TextInput } from 'react-native-paper';


export default function Question({question, fn}) {
    const [input, setInput] = useState("");

    const onPress = () => {
        fn(input);
        setInput("");
    }

    return (
        <View style={{flex : 1, alignItems : 'center', justifyContent : 'top' }}>
            <Text> {question}</Text>

            <TextInput
                value={input}
                mode = {'outlined'}
                onChangeText={input => setInput(input)}
                style = {{width: 300}}
                />

            <Button title = "Submit" onPress = {onPress}></Button>
        </View>
    )

}