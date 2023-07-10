import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

//routes
import { AfadStack } from '../routes/Routes'
import HomePage from '../screens/HomePage'


function Article() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Kandilli Verileri</Text>
        </View>
    );
}

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: 'white' }, drawerStyle:{backgroundColor:'white'} }}>
            <Drawer.Screen
                name='HomePage'
                component={HomePage}
                options={{
                    drawerLabel: 'Anasayfa',
                    headerTitle: 'ANA SAYFA',
                    headerTitleAlign: 'center',
                    drawerActiveBackgroundColor:'#e3daa8',
                    drawerActiveTintColor:'white',
                    drawerInactiveTintColor:'black'
                    
                }}
            />
            <Drawer.Screen
                name="AfadStack"
                component={AfadStack}
                options={{
                    drawerLabel: 'Afad Verileri',
                    headerTitle: 'DOHAD',
                    headerTitleAlign: 'center',
                    drawerActiveBackgroundColor:'#e3daa8',
                    drawerActiveTintColor:'white',
                    drawerInactiveTintColor:'black'
                    
                }}
            />
            <Drawer.Screen
                name="Article"
                component={Article}
                options={{
                    drawerLabel: 'Kandilli Verileri',
                    headerTitle: 'DOHAD',
                    headerTitleAlign: 'center',
                    drawerActiveBackgroundColor:'#e3daa8',
                    drawerActiveTintColor:'white',
                    drawerInactiveTintColor:'black'
                }}
            />
        </Drawer.Navigator>
    )
}

export default MyDrawer