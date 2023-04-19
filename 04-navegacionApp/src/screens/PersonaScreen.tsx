import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/StackNavigator'

// interface RouterParams {
//     id: number;
//     nombre: string;
// }

//Colocamos como primer tipo el tipado de las rutas y el 2º es el nombre de la ruta en String
interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{}

const PersonaScreen = ( { route, navigation }: Props ) => {

    // const params = route.params as RouterParams

    const params = route.params 

    useEffect(()=>{
        navigation.setOptions({
            title: params.nombre 
        })
    }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{
        JSON.stringify(params, null, 3)
      }</Text>
    </View>
  )
}

export default PersonaScreen
