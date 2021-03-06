import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import TabNavigator from '../navigation/TabNavigator';
import Profile from '../screens/Profile';
const Drawer= createDrawerNavigator();
const DrawerNavigator=()=>{
    <Drawer.Navigator>
      <  Drawer.Screen name="Home" component={TabNavigator}/>
      <Drawer.Screen name="Profile" component={Profile}/>
    </Drawer.Navigator>
}
export default DrawerNavigator