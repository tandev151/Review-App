import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
       
    },
    titleText: {
        fontFamily: 'Lato-Bold',
        fontSize: 18
    },
    // item: {
    //     padding: 16,
    //     marginTop: 16,
    //     borderColor: '#bbb',
    //     borderWidth: 1,
    //     borderStyle: 'dashed',
    //     borderRadius: 10,
    //     flexDirection: 'row'
    // },
    rating:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop : 16,
        marginTop : 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    },
    iconAdd: {
        marginBottom: 10,
        borderWidth: 1,
        borderRadius : 10,
        borderColor: 'pink',
        color: 'pink',
        padding : 10,
        alignSelf: 'center'
    },
    rowContainer: {
       flex:1,
       flexDirection: 'row',
       alignItems: 'center'
    }
});

export const images = {
    rating: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
};
