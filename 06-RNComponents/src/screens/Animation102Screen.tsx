import React, { useContext } from 'react'
import { Animated, StyleSheet, View } from 'react-native';
import useAnimation from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const Animation102Screen = () => {

  const {pan, panResponder} = useAnimation()
  const { theme: {colors} } = useContext(ThemeContext)

  return (
    <View style={{...styles.container, flex: 1}}>
       <Animated.View {...panResponder.panHandlers }style={[pan.getLayout(), {...styles.blueBox, backgroundColor: colors.primary},]} />
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
        width: 150,
        height: 150,

    }

})