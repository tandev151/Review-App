import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';
import {globalStyles,images }from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({route,navigation}){
    const {title} = route.params;
    const {rating} = route.params;
    const {body} =route.params;

    const ratings = JSON.stringify(rating).substring(1,JSON.stringify(rating).length -1);
    return(
        <View style = {globalStyles.container}>
            <Card>
                {/* {JSON.stringify(title).substring(1,JSON.stringify(title).length -1) } */}
                <Text >Name of game: {title}</Text>
                
                <Text>Comment: {body} </Text>
                <View style = {globalStyles.rating}>
                    <Text>GameZone rating: </Text>
                    <Image source = {images.rating[ratings]}/>
                    
                </View>
            </Card>
       
        </View>
    );
}

