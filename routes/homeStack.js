import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';




const Stack = createStackNavigator();

export default function HomeStack({navigation}){
    
     return (
            <NavigationContainer independent = {true}>
                <Stack.Navigator>
                        <Stack.Screen 
                            name = "Home" 
                            component = {Home} 
                            options = {() => {
                                return {
                                    headerTitle : () => <Header navigation = {navigation} />
                                }
                            } }
                            
                        />    

                        <Stack.Screen 
                            name = "ReviewDetails" 
                            component = {ReviewDetails} 
                            options ={{title : 'Review Details'}}
                        />

                       
                </Stack.Navigator>
            </NavigationContainer>
       
         
     )
 }

