import * as React from 'react';
import { createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import About from '../screens/about';
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function AboutStack({navigation}){
    
    return(
        <NavigationContainer independent = {true}>
            <Stack.Navigator >
            
                <Stack.Screen 
                      name = "About" 
                      component = {About} 
                      options = {() => {
                          return {
                              headerTitle: () => <Header navigation = {navigation}/>,
                          }
                      }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}