import React, { useContext, useState } from 'react'
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {items, Slide} from '../data/slideshow';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const { width: screenWidth } = Dimensions.get('window')

const SlidesScreen = () => {

  const navigation = useNavigation<any>()
  const [ activeIndex, setActiveIndex ] = useState(0)
  const { theme: {colors} } = useContext(ThemeContext)
  
  const renderItem = (item: Slide) => {
    return (
    <View style={{
      flex: 1,
      backgroundColor: colors.background ,
      borderRadius: 5,
      padding: 40,
      justifyContent: 'center'
    }}>
      <Image source={ item.img } style={{ width: 350, height: 400, resizeMode: 'center'}} />
      <Text style={{...styles.title, color: colors.text}}>{ item.title }</Text>
      <Text style={{...styles.subtitle, color: colors.text}}>{ item.desc }</Text>
    </View>
    )
  }


  return (
    <SafeAreaView
    style={{ flex: 1, paddingTop: 50}}>
      <Carousel
            //   ref={(c) => { this._carousel = c; }}
              data={items}
              renderItem={({ item }) => renderItem(item)}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              layout="default"
              onSnapToItem={(index) => { setActiveIndex(index)}}
        />
      <View style={{ 
        flexDirection: 'row',
         justifyContent: 'space-between',
         marginHorizontal: 20,
         alignItems: 'center' }}>
      <Pagination 
      dotsLength={ items.length }
      activeDotIndex={ activeIndex }
      dotStyle={{width: 10, height: 10, borderRadius: 10, backgroundColor: colors.text}}
      />
      {
        activeIndex == 2 && <TouchableOpacity style={{
          flexDirection: 'row',
          backgroundColor: colors.primary ,
          width: 140,
          height: 50,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        activeOpacity={0.8}
        onPress={()=>navigation.navigate("HomeScreen")}
        >
          <Text style={{ fontSize: 25, color: 'white' }}>Entrar</Text>
          <Icon 
           name="chevron-forward-outline"
           color= 'white'
           size={30}/>
        </TouchableOpacity>
      }
      
      </View>
    </SafeAreaView>
  )
}

export default SlidesScreen


const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16
  }
})