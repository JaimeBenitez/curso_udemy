import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import TouchableIcon from '../components/TouchableIcon';



const Tab1Screen = () => {
  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: 10,
      }}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />  
        <TouchableIcon iconName="attach-outline" />  
        <TouchableIcon iconName="bonfire-outline" /> 
        <TouchableIcon iconName="calculator-outline" />  
        <TouchableIcon iconName="chatbubble-ellipses-outline" /> 
        <TouchableIcon iconName="images-outline" /> 
        <TouchableIcon iconName="leaf-outline" />
      </Text>

    </View>
  )
}

export default Tab1Screen
