import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList, Image, Dimensions, TextInput} from 'react-native';
import product_data from './components/product_data.json';
import ProductCard from './components/ProductCard';



const App = () => {
  const renderList = ({item}) => <ProductCard product={item}/>
  const [searchtext, setsearchtext] = useState("");
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(product_data)
  }, [])

  useEffect(() => {
    const filteredValue =product_data.filter( item => {
      const text = searchtext.toUpperCase();
      const productTitle = item.title.toUpperCase();
      return productTitle.indexOf(text) > -1;
    })
    setDisplayList(filteredValue)
  }, [searchtext])

  return (
    <SafeAreaView >
      <View >
        <View >
          <Image source={{uri:'https://www.gursesgazetesi.com/images/haberler/2019/07/gunes-ve-sirius-yildizinin-yan-yana-gelmesi-kaderin-yazildigi-gun-1900saatine-dikkat.jpg'}}
          style={styles.imgStyle}
          />
          <Text style={styles.textstyle}>Sirius Store</Text>
        </View>
        <View>
          <TextInput 
          style={styles.searchBar} 
          placeholder='Search...'
          onChangeText={value => setsearchtext(value)}
          />
        </View>
        <FlatList
        data={displayList}
        renderItem={renderList}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        />
      </View>
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  textstyle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    color: 'white',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    position: "absolute",
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 86,
    marginTop: 18,
  },
  imgStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.1,
    resizeMode: "cover",
    marginTop: 5,
    position: "relative",
    borderWidth: 1,
    borderColor: 'gray',
  }, 
  searchBar: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 3,
  }
})

export default App;
