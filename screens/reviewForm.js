import React , {useState} from 'react';
import { Text,TextInput, View , Keyboard , TouchableWithoutFeedback} from 'react-native';
import { modalStyles } from '../styles/modalStyles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FlatButton from '../shared/button';
const reviewSchema = Yup.object().shape({
    title : Yup.string()
    .min(2,'Too Short')
    .required('Required'),
    body : Yup.string()
    .min(5,'Too Short')
    .required('Required'),
    rating: Yup.string()
    .required()
    .test('is-num-1-5','Rating must be is 1-5',
    (val) => {
      return  parseInt(val)<6 && parseInt(val)>0
    })
});

export default function ReviewForm({addReview,editReview,review,isEdit}){

    const [isEditing, setEdit] = useState(isEdit);

    
    

    return (
        
        <TouchableWithoutFeedback
        onPress = {() => {Keyboard.dismiss()
        console.log('dismissed keyboard')
        }}>
            <View style = {modalStyles.modalContent}>     
                {isEditing ? (     
                    <Formik  
                        
                        initialValues = {{title:review.title , body:review.body, rating: review.rating.toString(), key: review.key}}
                        validationSchema = {reviewSchema}
                        onSubmit = {(values) => {
                            console.log(values);
                            editReview(values.key,values);
                            
                        }}
                    >
                        {(props)  => (
                            <View>
                                    <TextInput
                                    style = {modalStyles.input}
                                    placeholder = 'Review title'
                                    value = {props.title}
                                    onChangeText = {props.handleChange('title')}
                                    onBlur = {props.handleBlur('title')}
                                    value ={props.values.title}/>
                                    {/* Text de hien thi thong bao loi */}
                                    <Text style ={modalStyles.errors}>{props.touched.title && props.errors.title}</Text>

                                    <TextInput
                                    multiline
                                    style = {modalStyles.input}
                                    placeholder = 'Review body'
                                    value = {props.body}
                                    onChangeText = {props.handleChange('body')}
                                    onBlur = {props.handleBlur('body')}
                                    value ={props.values.body}/>
                                    
                                    <Text style ={modalStyles.errors}>{props.touched.body && props.errors.body}</Text>

                                    <TextInput
                                    style = {modalStyles.input}
                                    placeholder = 'Review rating (1-5)'
                                    value = {props.rating}
                                    onChangeText = {props.handleChange('rating')}
                                    keyboardType = 'numeric'
                                    onBlur = {props.handleBlur('rating')}
                                    value ={props.values.rating}/>

                                    <Text style ={modalStyles.errors}>{props.touched.rating && props.errors.rating}</Text>

                                    <FlatButton text = 'Confirm' onPress={props.handleSubmit}/>
                            </View>
                        )}
                    </Formik>): (
                
                    <Formik  
                    initialValues = {{title:'' , body:'', rating: ''}}
                    validationSchema = {reviewSchema}
                    onSubmit = {(values) => {
                        addReview(values);
                        console.log(values);
                    }}
                    >
                    {(props)  => (
                        <View>
                                <TextInput
                                style = {modalStyles.input}
                                placeholder = 'Review title'
                                value = {props.title}
                                onChangeText = {props.handleChange('title')}
                                onBlur = {props.handleBlur('title')}
                                value ={props.values.title}/>
                                {/* Text de hien thi thong bao loi */}
                                <Text style ={modalStyles.errors}>{props.touched.title && props.errors.title}</Text>

                                <TextInput
                                multiline
                                style = {modalStyles.input}
                                placeholder = 'Review body'
                                value = {props.body}
                                onChangeText = {props.handleChange('body')}
                                onBlur = {props.handleBlur('body')}
                                value ={props.values.body}/>
                                
                                <Text style ={modalStyles.errors}>{props.touched.body && props.errors.body}</Text>

                                <TextInput
                                style = {modalStyles.input}
                                placeholder = 'Review rating (1-5)'
                                value = {props.rating}
                                onChangeText = {props.handleChange('rating')}
                                keyboardType = 'numeric'
                                onBlur = {props.handleBlur('rating')}
                                value ={props.values.rating}/>

                                <Text style ={modalStyles.errors}>{props.touched.rating && props.errors.rating}</Text>

                                <FlatButton text = 'Submit' onPress={props.handleSubmit}/>
                        </View>
                    )}
                </Formik>)
                }              
           
                
            </View>
        </TouchableWithoutFeedback>
    );
}