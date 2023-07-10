import 'react-native-gesture-handler';
import { View, Text,Button } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from './drawer/MyDrawer';



export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}