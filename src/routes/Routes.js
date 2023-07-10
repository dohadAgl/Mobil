import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import AfadDataPage from '../screens/AfadDataPage';
import DetailAfadData from '../screens/DetailAfadData'

const Stack = createStackNavigator();

export function AfadStack() {
    return (
          <Stack.Navigator initialRouteName='afadVerileriSayfasi'>
              <Stack.Screen name='afadVerileriSayfasi' component={AfadDataPage} options={{headerShown:false}}/>
              <Stack.Screen name='DetailAfadData' component={DetailAfadData} options={{headerShown:false}}/>
          </Stack.Navigator>
    )
  }