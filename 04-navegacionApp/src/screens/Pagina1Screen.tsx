import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

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
          <Icon name="basketball-outline" size={80} color='orange' /> 
        </TouchableOpacity>

        <TouchableOpacity
        style={{...styles.botonGrande, backgroundColor: '#FF9427'}}
        onPress={()=> navigation.navigate('PersonaScreen', { id:2 , nombre: 'María'})}
        >
           <Icon name="camera-outline" size={80} color='purple' /> 
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Pagina1Screen
