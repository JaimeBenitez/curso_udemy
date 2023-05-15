import { useRef } from "react"
import { Animated, Easing, PanResponder } from "react-native"


const useAnimation = () => {
  
    const opacity  = useRef( new Animated.Value(0.4)).current
    const position = useRef( new Animated.Value(0)).current
    const pan = useRef( new Animated.ValueXY()).current
  
    const fadeIn = ( duration: number = 300) => {
      Animated.timing(
        opacity,
        {
          toValue: 1,
          duration: 300,
          useNativeDriver: true
        }
      ).start()
  
    }
    const fadeOut = () => {
      Animated.timing(
        opacity,
        {
          toValue: 0.4,
          duration: 300,
          useNativeDriver: true
        }
      ).start()
    }

    const startMovingPosition = ( initPosition: number, duration: number = 300) => {
        
        position.setValue(initPosition)

        Animated.timing(
            position,
            {
              toValue: 0,
              duration,
              useNativeDriver: true
            }
          ).start()
    }
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove:Animated.event([
        null,
        {
          dx: pan.x,
          dy: pan.y
        }
      ],
      // En este caso el useNativeDriver falla
      {useNativeDriver: false}),
      onPanResponderRelease: () => {
        Animated.spring(
          pan,
          {toValue: {x: 0, y: 0}, useNativeDriver: false}
        ).start()
      }
    })
    return {
        fadeIn,
        fadeOut,
        startMovingPosition,
        panResponder,
        opacity,
        position,
        pan
    }
  }


export default useAnimation
