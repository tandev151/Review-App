import * as React from 'react';
import { Entypo } from '@expo/vector-icons'
import {View , Text, StyleSheet, Image, ImageBackground} from 'react-native';


export default function Header({navigation}){


    return (
        

        <ImageBackground style = {styles.header}  >
            <Entypo name = 'menu' size = {26} style = {styles.icon} onPress = {() =>navigation.openDrawer()}/>
            <View style = {styles.headerTitle}>
                <Image source = {require('../assets/heart_logo.png')} style = {styles.image}/>
                <Text style = {styles.headerText}>Game Zone</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        width : '100%',
        height : '100%',
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },

    headerTitle: {
        flexDirection: 'row', 
            
    },

    image:{
        width: 26,
        height: 26,
        marginHorizontal: 10,
    },
    headerText:{
        fontSize : 20,
        fontFamily : 'Lato-Bold',
        color: 'red'
        
    },
    icon:{
        position: 'absolute',
        left: 50,
        color:'red'
    }
});