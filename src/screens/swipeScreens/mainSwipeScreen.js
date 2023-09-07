//default layout
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Header from '../../components/header/Header.js';

export default function MainSwipeScreen() {
   
    return (
        <View  style = {{flex:1}}>
        <Header></Header>
        </View>
    );
       
}

