import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

const AlbumsScreen = () => {

  const { logOut, authState:{ isLoggedIn }} = useContext( AuthContext )
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Albums Screen</Text>

      {
        isLoggedIn && <Button title="Sign In" onPress={ logOut } /> 
      }
    </View>
  )
}

export default AlbumsScreen