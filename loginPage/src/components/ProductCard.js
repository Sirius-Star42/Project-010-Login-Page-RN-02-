import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const ProductCard = ({product}) => {
    return (
        <View style={styles.container}>
            <Image
            source={{uri: product.imgURL}}
            style={styles.imgcontainer}
            />
            <View style={{flex: 1, justifyContent: "space-between"}}>
            <Text>{product.title}</Text>
            <Text style={{fontWeight: "bold"}}>{product.price}</Text>
            </View>
           
            
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderColor: '#eceff5',
    },

    imgcontainer: {
        height: Dimensions.get('window').height / 4,
        resizeMode: "contain",
        
        
    }
})



export default ProductCard;