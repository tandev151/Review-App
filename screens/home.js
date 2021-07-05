import React ,{useState} from 'react';
import {View, Text, Modal, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles }from '../styles/global';
import {MaterialIcons} from '@expo/vector-icons'
import { modalStyles } from '../styles/modalStyles';
import ReviewForm from './reviewForm';
import Card from '../shared/card';



export default function Home({navigation}){

    const [modalOpen,setModalOpen] = useState(false);
    const [isRender, setRender] = useState(false);
    const [edit,setEdit] = useState(false);
    const [itemSelected,setItemSelected] = useState(null);
    
    const [reviews,setReviews] = useState([
        {title:'League Of Legend',rating: 5, body: 'Interesting!',key: '1' },
        {title:'Fifa Online 4',rating: 4, body: 'Pretty Good',key: '2' },
        {title:'GTA5',rating: 5, body: 'Great',key: '3' },
    ]);

   const editReview = (review) => {
        // Set item đã chọn
        setItemSelected(review);
        setEdit(true);
    
        // console.log(itemSelected?.title);
        // Mở modal
        setModalOpen(true);
   };

    const deleteReview = (key) => {
        setReviews((prevReviews) =>{
            return prevReviews.filter(review => review.key != key);
        });
    };

   
    const addReview = (review) => {
        
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
           return [review,...currentReviews];
        });
        setModalOpen(false);
    }
    const handleAdd = () => {
        setEdit(false);
        setModalOpen(true);
    }

  
    const handleEdit = (key,review) => {
       const newReviews = reviews.map( item => {
           if(item.key == key){
               item = review;
               return item;
           }
           return item;
       });
       setReviews(newReviews);
       setModalOpen(false);
    };

    // const pressHandler = (item) =>{
    //     navigation.navigate('ReviewDetails',item);
    //     // navigation.push('ReviewDetails');
    // }


    return(

        <View style = {globalStyles.container}>
   
            <Modal visible = {modalOpen} animationType = 'slide'  >
                <View style = {modalStyles.modalContent}>
                    <MaterialIcons 
                    name = 'close'
                    size = {28}
                    style = {{...globalStyles.iconAdd , ...modalStyles.iconClose} }
                    onPress = {() => setModalOpen(false)}/>
                    {edit? (
                        <ReviewForm addReview = {addReview} editReview = {handleEdit} review = {itemSelected} isEdit  = {true}   />
                    ):(
                        <ReviewForm addReview = {addReview} review = {itemSelected} isEdit  = {false}/>
                    )}
                    

                    
                    {/* <Text>{itemSelected?.rating}</Text> */}
                </View>
            </Modal>
            
            
            <MaterialIcons
                name = 'add'
                size = {28}
                style = {globalStyles.iconAdd}
                onPress = {() => handleAdd()}/>
            
            <FlatList 
                data ={reviews}
                extraData = {isRender}
                renderItem = {({item}) => (
                    <View style = {globalStyles.rowContainer}>
                        <TouchableOpacity onPress ={() =>navigation.navigate('ReviewDetails',item)}>
                            <Card>
                                <Text style = {globalStyles.titleText}>{item.title}</Text>
                            </Card>
                        </TouchableOpacity>
                        <MaterialIcons name = 'edit' size = {26} onPress = {() => editReview(item)}/>
                        <MaterialIcons name = 'delete' size = {26} onPress = {() => deleteReview(item.key)}/>
                    </View>
                )}
               
            />
            
        </View>
    );
}

