import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MyButton from './components/Button';


const App = () => {
  return (
    <SafeAreaView>
      <View>
        
      </View>
      <MyButton banner="Press me!" color="#81d4fa" />
      <MyButton banner="Press me!" color="#40e4fa" />
      <MyButton/>
      <MyButton/>
    </SafeAreaView>
    
  )
}


export default App;
