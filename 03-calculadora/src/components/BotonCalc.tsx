import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface Props{
    texto: string;
    color?: string;
    ancho?: Boolean;
    accion: ( numeroTexto:string ) => void;
}

const BotonCalc = ({ texto,color='oscuro', ancho = false, accion } : Props) => {
  const buttonStyle = [
    styles.boton,
    color == 'claro' && styles.claro,
    color == 'oscuro' && styles.oscuro,
    color == 'naranja' && styles.naranja,
    ancho == true && styles.ancho
  ]
  const textStyle = [
    styles.botonTexto,
    color == 'oscuro' && styles.textoBlanco,
    color == 'naranja' && styles.textoBlanco,
  ]
  return (
    <TouchableOpacity onPress={() => accion( texto )}>
      <View style={buttonStyle}>
          <Text style={textStyle}>{ texto }</Text>
      </View>
    </TouchableOpacity>
  )
}

export default BotonCalc

const styles = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    claro: {
      backgroundColor: '#9B9B9B'
    },
    oscuro: {
      backgroundColor: '#2D2D2D'
    },
    naranja: {
      backgroundColor: '#FF9427'
    },
    ancho: {
      width: 180
    },
    botonTexto: {
        textAlign: 'center',
        color: 'black',
        padding: 10,
        fontSize: 30,
        fontWeight: 'bold'
    },
    textoBlanco:{
      color: 'white'
    }
})