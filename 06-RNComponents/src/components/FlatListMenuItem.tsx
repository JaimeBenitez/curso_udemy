import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    menuItem: MenuItem
}

const FlatListMenuItem = ({ menuItem }: Props) => {
  //Usamos any como tipo aqui para que TS no se queje
  const navigation = useNavigation<any>()
  const { theme: {colors} } = useContext(ThemeContext)
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress= {()=> navigation.navigate(menuItem.component)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} size={23} color={colors.primary} />    
        <Text style={{...styles.itemText, color: colors.text}}>{ menuItem.name }</Text>
        <View style={{ flex: 1 }} />
        <Icon name="chevron-forward-outline" size={23} color={colors.primary} />  
      </View>
    </TouchableOpacity>
  )
}

export default FlatListMenuItem

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row'
    },
    itemText: {
      marginLeft: 10,
      fontSize: 19,
    },
    
})