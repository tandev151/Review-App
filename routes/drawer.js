import * as React from 'react';
import { createDrawerNavigator} from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import AboutStack from './aboutStack';
import HomeStack from './homeStack';
import About from '../screens/about';
import Home from '../screens/home';


const Drawer = createDrawerNavigator();

export default function Navigation(){
    return(
        <NavigationContainer independent = {true}>
            <Drawer.Navigator initialRouteName = 'Home'>
                <Drawer.Screen name  = 'Home' component ={HomeStack}/>
                <Drawer.Screen name = 'About' component ={AboutStack}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}