import * as React from 'react';
import {View} from 'react-native';
import { Button } from 'react-native-paper';

import Header from '../../components/header/Header.js';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const MyComponent = ({navigation}) => (
    <View style = {{flex:1}}>
    <Header></Header>
    <View style={{ padding: 20, flex : 1, alignItems : 'center', justifyContent : 'space-evenly' }}>
        <Button contentStyle = {{ width: 301, height: 100}} icon="account" mode="contained" onPress={() => navigation.navigate("SignInScreen")}>
            Sign In
        </Button>
            <Button  contentStyle = {{ width: 300, height: 100}} icon="account-plus" mode="contained" onPress={() => navigation.navigate("SignUpScreen")}>
            Sign Up
        </Button>
  </View>
  </View>
);

export default MyComponent;