import React from 'react'
import { Text, View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native'

//Dimensions nos permite sacar las dimensiones del dispositivo
// const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 200,
        backgroundColor: 'red',
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        width: '50%',
        height: '50%'
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
    }
})
const DimensionesScreen = () => {
    //Esta es la version hook del Dimensions, a diferencia del mismo, este si se recalcula, pero es mas lento
    const { width, height } = useWindowDimensions();
  return (
    <View>
        <View style={styles.container}>
            <View style={{...styles.cajaMorada, width: width * 0.5}}/>
            <View style={styles.cajaNaranja}/>
        </View>
        <Text style={styles.title}>W: { width } H: { height }</Text>
    </View>
  )
}

export default DimensionesScreen
