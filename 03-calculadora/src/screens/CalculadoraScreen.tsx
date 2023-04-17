import React, { useState, useRef } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import BotonCalc from '../components/BotonCalc'
import { useCalculadora } from '../hooks/useCalculadora'

const CalculadoraScreen = () => {

  const { 
    numero, 
    numeroAnterior,
    limpiar,
    armarNumero, 
    positivoNegativo, 
    btnDelete, 
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular } = useCalculadora() 

  return (
    <View style={styles.calculadoraContainer}>
      {
        (numeroAnterior !== '0') && (
          <Text style={ styles.resultadoPequeno }>{ numeroAnterior }</Text>
        )
      }
        
        <Text style={ styles.resultado }
        numberOfLines={ 1 }
        adjustsFontSizeToFit
        >{ numero }</Text>
        {/* Fila de botones */}
        <View style={styles.fila}>
            <BotonCalc texto="C" color="claro" accion={ limpiar } />
            <BotonCalc texto="+/-" color="claro" accion={ positivoNegativo }/>
            <BotonCalc texto="del" color="claro" accion={ btnDelete }/>
            <BotonCalc texto="/" color="naranja" accion={ btnDividir }/>    
        </View>
        <View style={styles.fila}>
            <BotonCalc texto="7" accion={ armarNumero } />
            <BotonCalc texto="8" accion={ armarNumero } />
            <BotonCalc texto="9" accion={ armarNumero } />
            <BotonCalc texto="X" color="naranja" accion={ btnMultiplicar }/>    
        </View>
        <View style={styles.fila}>
            <BotonCalc texto="4" accion={ armarNumero } />
            <BotonCalc texto="5" accion={ armarNumero } />
            <BotonCalc texto="6" accion={ armarNumero } />
            <BotonCalc texto="-" color="naranja" accion={ btnRestar }/>    
        </View>
        <View style={styles.fila}>
            <BotonCalc texto="1" accion={ armarNumero } />
            <BotonCalc texto="2" accion={ armarNumero } />
            <BotonCalc texto="3" accion={ armarNumero } />
            <BotonCalc texto="+" color="naranja" accion={ btnSumar }/>    
        </View>
        <View style={styles.fila}>
            <BotonCalc texto="0" ancho accion={ armarNumero }  />
            <BotonCalc texto="." accion={ armarNumero } />
            <BotonCalc texto="=" color="naranja" accion={ calcular }/>    
        </View>
        
        
    </View>
  )
}

export default CalculadoraScreen
