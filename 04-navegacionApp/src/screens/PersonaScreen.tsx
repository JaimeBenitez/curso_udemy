import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/StackNavigator'
import { AuthContext } from '../context/AuthContext'

// interface RouterParams {
//     id: number;
//     nombre: string;
// }

//Colocamos como primer tipo el tipado de las rutas y el 2º es el nombre de la ruta en String
interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{}

const PersonaScreen = ( { route, navigation }: Props ) => {

    // const params = route.params as RouterParams
    const { changeUsername } = useContext( AuthContext)

    const params = route.params 

    useEffect(()=>{
        navigation.setOptions({
            title: params.nombre 
        })
        changeUsername(params.nombre)
    }, [])

    /* useEffect(()=>{
     changeUsername(params.nombre)
   }, [])*/

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{
        JSON.stringify(params, null, 3)
      }</Text>
    </View>
  )
}

export default PersonaScreen
