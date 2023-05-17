import React, { useContext, useState } from 'react'
import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const SwitchScreen = () => {
 const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
 })
 const { theme: {colors} } = useContext(ThemeContext)

 const { isActive, isHungry, isHappy } = state
 const onChange = (value: boolean, field: string) => {
    setState({
        ...state,
        [field]: value
    })
 }
  return (
    <View style={{ marginHorizontal: 20 }}>        
        <HeaderTitle title="Switches" />
        <View style={styles.switchRow}>
            <Text style={{...styles.switchText, color: colors.text}}>isActive</Text>
            <CustomSwitch isOn={isActive} onChange={(value) => onChange(value,'isActive')} />
        </View>
        <View style={styles.switchRow}>
            <Text style={{...styles.switchText, color: colors.text}}>isHungry</Text>
            <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value,'isHungry')} />
        </View>
        <View style={styles.switchRow}>
            <Text style={{...styles.switchText, color: colors.text}}>isHappy</Text>
            <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value,'isHappy')} />
        </View>
        
        <Text style={{...styles.switchText, color: colors.text}}>
            {JSON.stringify(state, null, 5)}
        </Text>
    </View>
  )
}

export default SwitchScreen

