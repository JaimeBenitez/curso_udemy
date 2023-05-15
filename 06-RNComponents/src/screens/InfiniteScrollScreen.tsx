import React, { useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import FadeInImage from '../components/FadeInImage';


const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([0,1,2,3,4,5])

  const loadMore = () => {

    const newArray: number[] = []
    //Creamos un array con los siguientes numeros [6,7,8,9,10,11]
    for( let i = 0; i < 5; i++){
        newArray[i] = numbers.length + i
    } 
    setTimeout(() => {
      setNumbers([...numbers, ...newArray])
    }, 1500)
    
  }

  const renderItem = (item: number) => {
    return(
      <FadeInImage uri={ `https://picsum.photos/id/${ item }/1024/1024`} 
      style={{
        width: '100%',
        height: 400
      }}
      />
      // <Image source={{ uri: `https://picsum.photos/id/${ item }/500/400`}}
      // style={{
      //   width: '100%',
      //   height: 400
      // }}/>

    )
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem ={({item}) => renderItem(item)}

        ListHeaderComponent={ () => (
        <View style={{ marginHorizontal: 20 }}>
          <HeaderTitle title="Infinite Scroll"/>
        </View>
        )}
        //Lo que hace al llegar al final
        onEndReached={ loadMore }
        //Cuanto espacio de margen hasta el final cuando se activa la función de arriba
        onEndReachedThreshold={ 0.5 }
        ListFooterComponent={ 
          <View style={{
            height: 150,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <ActivityIndicator size={20} color="#5856D6"/>
          </View>}
        />
    </View>
  )
}

export default InfiniteScrollScreen

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150
  }
})