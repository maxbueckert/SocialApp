import * as React from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-paper';


const authTitle = ({navigation}) => (
    <View style = {{paddingTop: 100, alignItems : 'center', justifyContent : 'space-evenly'}}>
    <Text style = {{fontSize:70}}>GroupUp</Text>
    </View>
);

export default authTitle;