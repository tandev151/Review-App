import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function FlatButton({text, onPress}){
   return( <TouchableOpacity onPress = {onPress}>
        <View style = {styles.container}>
            <Text style ={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        backgroundColor: 'pink',
        paddingHorizontal: 10,
        paddingVertical: 14,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 16,
    }
})