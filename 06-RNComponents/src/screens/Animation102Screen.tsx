import React from 'react'
import { Animated, StyleSheet, View } from 'react-native';
import useAnimation from '../hooks/useAnimation';

const Animation102Screen = () => {

  const {pan, panResponder} = useAnimation()

  return (
    <View style={{...styles.container, flex: 1}}>
       <Animated.View {...panResponder.panHandlers }style={[pan.getLayout(), styles.blueBox]} />
    </View>
  )
}



export default Animation102Screen

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    blueBox: {
        backgroundColor: '#75CED8',
        width: 150,
        height: 150,

    }

})