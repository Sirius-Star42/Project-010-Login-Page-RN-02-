import React from 'react';
import {SafeAreaView, View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';

const MyButton = (props) => {
  return (
    <TouchableOpacity style={[mystyles.buttonContainer, {backgroundColor: props.color}]}>
        <Text style={mystyles.textStyle}>{props.banner}</Text>
    </TouchableOpacity>
  )
}
const mystyles=StyleSheet.create({
    buttonContainer: {
      backgroundColor: '#a5d6a7',
      padding: 12,
      margin: 10,
      borderRadius: 5,
      alignItems: "center",
  
  
    },
    textStyle: {
        fontSize: 20,

    }
  })
export default MyButton;