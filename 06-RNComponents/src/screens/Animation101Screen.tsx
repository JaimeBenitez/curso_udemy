import React, { useContext, useRef } from 'react'
import { Animated, Button, StyleSheet, View, Easing } from 'react-native';
import useAnimation from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';




const Animation101Screen = () => {
  const { opacity, position, fadeIn, fadeOut, startMovingPosition} = useAnimation()
  const { theme: {colors} } = useContext(ThemeContext)
  return (
    <View style={styles.container}>
       <Animated.View style={{...styles.purpleBox,
        backgroundColor: colors.primary,
        marginBottom: 20,
        opacity, 
        transform:[{
          translateX: position,
       }]}} />

       <Button title="Fade In" onPress={() => {
        fadeIn()
        startMovingPosition(-100)}} />
       <Button title="Fade Out" onPress={fadeOut} />
    </View>
  )
}



export default Animation101Screen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    purpleBox: {
        width: 150,
        height: 150
    }

})