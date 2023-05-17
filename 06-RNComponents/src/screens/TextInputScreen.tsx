import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { useForm } from '../hooks/useForm'
import CustomSwitch from '../components/CustomSwitch'
import { ThemeContext } from '../context/themeContext/ThemeContext'

const TextInputScreen = () => {

  const { theme: {colors, dividerColor} } = useContext(ThemeContext)

  const { form, onChange, isSuscribed } = useForm({
    name: '',
    email: '',
    phone: '',
    isSuscribed: false,
  })


  return (
    <KeyboardAvoidingView
     behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView>
        <View style={ styles.globalMargin }>
          <HeaderTitle title="TextInputs" />

          <TextInput 
            style={{ ...stylesScreen.inputStyle, borderColor: dividerColor, color: colors.text }}
            placeholder='Ingrese su nombre'
            placeholderTextColor={ colors.text }
            autoCorrect={false}
            autoCapitalize='words'
            onChangeText={(value) => onChange(value, 'name')}
          />

          <TextInput 
            style={{ ...stylesScreen.inputStyle, borderColor: dividerColor, color: colors.text }}
            placeholder='Ingrese su email'
            placeholderTextColor={ colors.text }
            autoCorrect={false}
            autoCapitalize='none'
            onChangeText={(value) => onChange(value, 'email')}
            keyboardType='email-address'
            keyboardAppearance='dark'
          />
          <View style={styles.switchRow}>
            <Text style={{...styles.switchText, color: colors.text}}>Suscribirme</Text>
            <CustomSwitch isOn={isSuscribed} onChange={(value) => onChange(value, 'isSuscribed')} />
          </View>
                <HeaderTitle title="TextInputs" />
                <HeaderTitle title="TextInputs" />
                <HeaderTitle title={ JSON.stringify(form, null, 3)} />

          <TextInput 
            style={{ ...stylesScreen.inputStyle, borderColor: dividerColor, color: colors.text }}
            placeholder='Ingrese su teléfono'
            placeholderTextColor={ colors.text }
            onChangeText={(value) => onChange(value, 'phone')}
            keyboardType='phone-pad'
          />

          <View style={{ height: 100 }} />
          
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default TextInputScreen


const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 5,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    }
})