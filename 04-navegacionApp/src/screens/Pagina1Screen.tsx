import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';

//Necesario para ver los tipos
interface Props extends StackScreenProps<any,any>{}

const Pagina1Screen = ( { navigation }: Props ) => {
  
  return (
    <View style={ styles.globalMargin}>
      <Text style={styles.title}> Pagina1Screen </Text>

      <Button title="Ir página 2"
      onPress={() => navigation.navigate('Pagina2Screen')}/>

      <Text style={{ 
        marginVertical: 20,
        fontSize: 20,
        marginLeft: 5
        }}>Navegar con argumentos</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity
        style={{...styles.botonGrande, backgroundColor: '#5856D6'}}
        onPress={()=> navigation.navigate('PersonaScreen', { id:1 , nombre: 'Pedro'})}
        >
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={{...styles.botonGrande, backgroundColor: '#FF9427'}}
        onPress={()=> navigation.navigate('PersonaScreen', { id:2 , nombre: 'María'})}
        >
          <Text style={styles.botonGrandeTexto}>María</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Pagina1Screen
