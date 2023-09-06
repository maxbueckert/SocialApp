import * as React from 'react';
import {View} from 'react-native';
import { Button } from 'react-native-paper';

import Header from '../../components/header/Header.js';


const MyComponent = ({navigation}) => (
    <View style = {{flex:1}}>
    <Header></Header>
    <View style={{ padding: 20, flex : 1, alignItems : 'center', justifyContent : 'space-around' }}>
        <Button icon="camera" mode="contained" onPress={() => navigation.navigate("SignInScreen")}>
            Sign In
        </Button>
            <Button icon="camera" mode="contained" onPress={() => navigation.navigate("SignUpScreen")}>
            Sign Up
        </Button>
  </View>
  </View>
);

export default MyComponent;