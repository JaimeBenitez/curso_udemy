import React, { useContext, useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { productsContext } from '../context/ProductsContext';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigator/ProductsNavigator';




interface Props extends StackScreenProps<ProductsStackParams, 'ProductsScreen'>{};

const ProductsScreen = ({ navigation }: Props) => {

  const [ refreshing, setRefreshing ] = useState(false) 

  const { products, loadProducts } = useContext( productsContext )

  useEffect(()=>{
    navigation.setOptions({
      headerRight: ()=>( 
      <TouchableOpacity activeOpacity={0.8} style={{ marginRight: 10 }} onPress={() => navigation.navigate('ProductScreen',{})}>
        <Text>Agregar</Text>
      </TouchableOpacity>)
    })
  },[])
  const loadProductsFromBackend = async() => {
    setRefreshing(true)
    await loadProducts()
    setRefreshing(false)
  }
  return (
    <View style={{ flex: 1, marginHorizontal: 10}}>
      <FlatList 
      data={ products }
      keyExtractor={ (p) => p._id }
      renderItem={({item}) => (
        <TouchableOpacity activeOpacity={0.8}
        onPress={()=>navigation.navigate('ProductScreen', {
          id: item._id,
          name: item.nombre,
        })}>
          <Text style={ styles.productName }>{item.nombre}</Text>
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={()=>(
        <View style={styles.itemSeparator}/>
      )}
      refreshing={refreshing}
      onRefresh={loadProductsFromBackend}
      />
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  productName: {
    fontSize: 20,
    color: 'black'
  },
  itemSeparator: {
    borderBottomWidth: 2,
    marginVertical: 5,
    borderBottomColor: 'rgba(0,0,0,0.1)'
  }
})