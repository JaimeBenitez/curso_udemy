import React, { useContext } from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const ContactsScreen = () => {

  const { signIn, authState: { isLoggedIn } } = useContext(AuthContext)

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts Screen</Text>
      {
        !isLoggedIn && <Button title="Sign In" onPress={ signIn } /> 
      }
      
    </View>
  )
}

export default ContactsScreen