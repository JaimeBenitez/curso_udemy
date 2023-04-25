import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator
    sceneContainerStyle={{
        backgroundColor: 'white'
    }}
    screenOptions={ ({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
            borderTopWidth: 0,
            elevation: 0,
        },
        tabBarLabelStyle: {
            fontSize: 15,
            borderTopColor: colores.primary,
            elevation: 0,
            shadowColor: 'transparent'
        },
        tabBarIndicatorStyle: {
            backgroundColor: colores.primary
        },
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIcon: (props) => {
            let iconName: string = ''
            switch(route.name){
                case 'Chat':
                    iconName = 'bandage-outline';
                    break;
                case 'Contacts':
                    iconName = 'barbell-outline'
                    break;
                case 'Albums':
                    iconName = 'leaf-outline'
                    break;
            }
            return <Icon name={ iconName } size={20} color={ props.color } />
        }
    })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}