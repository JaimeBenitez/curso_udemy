import React, { useContext } from 'react'
import { Text, View } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {

  const { authState } = useContext( AuthContext )
  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: 20
    }}>
        <Text style={styles.title}> Setting Screen </Text>

        <Text>{ JSON.stringify(authState, null, 4)}</Text>
        
        {
          authState.favoriteIcon && (
            <Icon
            name={ authState.favoriteIcon }
            size={ 150 }
            color={colores.primary} />
          )
        }
    </View>
  )
}

export default SettingsScreen
