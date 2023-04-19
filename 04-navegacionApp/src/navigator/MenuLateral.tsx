import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appTheme';



const Drawer = createDrawerNavigator();



export const MenuLateral = () => {

    const { width } = useWindowDimensions()
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType: width >= 768 ? 'permanent' : 'front',
    }}
    drawerContent={ (props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="StackNavigator"  component={ StackNavigator } />
      <Drawer.Screen name="SettingsScreen"  component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( {navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image 
        source={{
          uri: 'https://thumbs.dreamstime.com/b/omita-al-avatar-placeholder-de-la-foto-icono-del-perfil-124557887.jpg'}}
        style={styles.avatar}  
          />
      </View>
      {/* Opciones de menú */}
      <View style={ styles.menuContainer}>

        <TouchableOpacity style={styles.menuBoton}
        onPress={ () => navigation.navigate('StackNavigator')}
        >
          <Text style={ styles.menuTexto}>Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBoton}
        onPress={ () => navigation.navigate('SettingsScreen')}
        >
          <Text style={ styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  )
}