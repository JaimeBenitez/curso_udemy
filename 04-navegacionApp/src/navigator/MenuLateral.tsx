import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';



const Drawer = createDrawerNavigator();



export const MenuLateral = () => {

    const { width } = useWindowDimensions()
  return (
    <Drawer.Navigator
    screenOptions={({ navigation }) => ({
      drawerType: width >= 768 ? 'permanent' : 'front',
      headerLeft: ()=>(
        <TouchableOpacity
        style={{
          marginLeft: 10
        }}
        onPress={ ()=> navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Icon name="grid-outline" size={30} color={colores.primary} />

        </TouchableOpacity>
      )
    })}
    
    drawerContent={ (props) => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs"  component={ Tabs } />
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
        <View style={{ flexDirection: 'row'}}>
          <Icon name="at-circle-outline" size={40} color='lightblue' /> 
          
          <TouchableOpacity style={styles.menuBoton}
          onPress={ () => navigation.navigate('Tabs')}
          >
            <Text style={ styles.menuTexto}>Navegacion</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row'}}>
          <Icon name="bulb-outline" size={40} color='pink' /> 
          <TouchableOpacity style={styles.menuBoton}
          onPress={ () => navigation.navigate('SettingsScreen')}
          >
            <Text style={ styles.menuTexto}>Ajustes</Text>
          </TouchableOpacity>
        </View>
      </View>

    </DrawerContentScrollView>
  )
}