import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function Card(props){
    return(
        <View style = {styles.card}>
            <View style = {styles.cardItem}>
                {props.children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 6,
        elevation : 3,
        backgroundColor: '#fff',
        shadowColor : '#333',
        width: 250,
        shadowOffset : {height : 1 , width : 1},
        shadowOpacity: 0.3,
        marginHorizontal : 4,
        marginVertical : 5,
    },
    cardItem: {
        marginHorizontal: 18,
        marginVertical : 10,
    }

});