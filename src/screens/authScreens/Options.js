import * as React from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-paper';
import AuthTitle from '../../components/signup/AuthTitle.js'


const AuthOptions = ({navigation}) => (
    <View style={{paddingTop: 150, flex: 1, alignItems : 'center', justifyContent : 'top' }}>
        <Button contentStyle = {{ width: 301, height: 100}} icon="account" mode="outlined" onPress={() => navigation.navigate("SignInScreen")}>
            Sign In
        </Button>
        <View style = {{height:80}}></View>
        <Button  contentStyle = {{ width: 300, height: 100}} icon="account-plus" mode="outlined" onPress={() => navigation.navigate("SignUpScreen")}>
            Sign Up
        </Button>
  </View>
);

export default AuthOptions;