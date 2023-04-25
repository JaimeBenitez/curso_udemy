import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Tab1Screen from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';

export const Tabs = () => {
    return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid/>
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
        sceneAnimationEnabled={ true }
        inactiveColor='white'
        activeColor='red'
        barStyle={{
            backgroundColor: colores.primary
        }}
        screenOptions={ ({ route }) => ({
            tabBarActiveTintColor: colores.primary,
            tabBarStyle: {
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarLabelStyle: {
                fontSize: 15
            },
            tabBarIcon: (props) => {
                let iconName: string = ''
                switch(route.name){
                    case 'Tab1Screen':
                        iconName = 'bonfire-outline';
                        break;
                    case 'Tab2Screen':
                        iconName = 'airplane-outline'
                        break;
                    case 'StackNavigator':
                        iconName = 'images-outline'
                        break;
                }
                return <Icon name={ iconName } size={20} color={ props.color } />
            }
        })}
        >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'TopTab'}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={ ({ route }) => ({
            tabBarActiveTintColor: colores.primary,
            tabBarStyle: {
                borderTopWidth: 0,
                elevation: 0,
            },
            headerShown: false,
            tabBarLabelStyle: {
                fontSize: 15
            },
            tabBarIcon: (props) => {
                let iconName: string = ''
                switch(route.name){
                    case 'Tab1Screen':
                        iconName = 'attach-outline';
                        break;
                    case 'Tab2Screen':
                        iconName = 'calculator-outline'
                        break;
                    case 'StackNavigator':
                        iconName = 'chatbubble-ellipses-outline'
                        break;
                }
                return <Icon name={ iconName } size={20} color={ props.color } />
            }
        })}>
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1' , tabBarIcon: (props)=> <Text style={{ color: props.color}}>T1</Text>}} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'TopTab'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}