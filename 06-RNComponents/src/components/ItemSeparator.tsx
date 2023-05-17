import React, { useContext } from 'react'
import { View } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext'

const ItemSeparator = () => {
  const { theme: {dividerColor} } = useContext(ThemeContext)
  
  return (
    
    <View
        style={{ 
        borderBottomWidth: 1,
        marginVertical: 8,
        borderBottomColor: dividerColor
    }} />   
  )
}

export default ItemSeparator
