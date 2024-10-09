import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Dimensions, Image } from 'react-native';

var height = Dimensions.get('screen').height;
var width = Dimensions.get('screen').width;
function CardFilme({ filme, handleClick }) {
    return (
        <TouchableWithoutFeedback style={styles.flatlist} onPress={handleClick}>
            <Image className='rounded-3xl'
            style={styles.imagem} 
            source={require('../../assets/img1.jpeg')} />
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    imagem: {
      height: height*0.36,
      width: width*0.45,
      marginHorizontal: 10,
    },
    flatlist: {
        marginHorizontal: 15,
      },
})

export default CardFilme