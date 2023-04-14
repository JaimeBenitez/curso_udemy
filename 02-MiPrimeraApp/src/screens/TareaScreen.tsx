import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#28425B',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        bottom: -100,
        right: 100
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        bottom: -50
    },
    cajaAzul: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        bottom: 100,
        right: -100
    },

})



const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  )
}

export default TareaScreen
