import React, { useContext, useState } from 'react'
import { Platform, Switch } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;
}
const CustomSwitch = ({isOn, onChange}: Props) => {


    const { theme: {colors}}  = useContext(ThemeContext)
    const [isEnabled, setIsEnabled] = useState(isOn);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled)
        onChange(!isEnabled)
    };
  return (
    <Switch
        trackColor={{false: colors.text , true: colors.notification}}
        thumbColor={(Platform.OS === 'android') ? colors.primary : ''}
        ios_backgroundColor= {colors.primary}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
  )
}

export default CustomSwitch