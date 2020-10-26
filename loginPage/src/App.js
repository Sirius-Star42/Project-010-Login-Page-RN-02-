import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet, FlatList, Image, Dimensions, TextInput} from 'react-native';
import product_data from './components/product_data.json';



const App = () => {


  return (
    <SafeAreaView>
      <View>
        <FlatList
        data={product_data}
        renderItem={({item}) => <Text>{item.title}</Text>}
        keyExtractor={(item, index) => index.toString()}
        
        />
      </View>
    </SafeAreaView>
    
  )
}



export default App;
