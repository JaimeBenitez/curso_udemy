import React from 'react'
import { TouchableNativeFeedback, StyleSheet, Text, View, Platform , TouchableOpacity} from 'react-native'


interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
    
}
const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
      },
      right: {
        right: 25,
      },
      left: {
        left: 25,
      },
      fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
      },
      fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
      }
})
const FloatingActionButton = ( { title, onPress, position = 'br' }: Props) => {

    const ios = () => {
        return (
        <TouchableOpacity style={ [styles.fabLocation, (position === 'bl') ? styles.left : styles.right ]}
        onPress={ onPress }>
            <View style={ styles.fab }>
              <Text style={ styles.fabText}>{ title }</Text>
            </View>
        </TouchableOpacity>
        )
        
    }

    const android = () => {
        return (
            //Para que el TouchableNativeFeedback respete los estilos debe estar dentro de un View que los contenga
            <View style={ [styles.fabLocation, (position === 'bl') ? styles.left : styles.right ]}>
            <TouchableNativeFeedback
            onPress={ onPress }
            //El Ripple nos permite configurar los estilos de la animación al clickar, SOLO ANDROID
            background={ TouchableNativeFeedback.Ripple('#28425B',false, 30) }>
            <View style={ styles.fab }>
                <Text style={ styles.fabText}>{ title }</Text>
            </View>
            </TouchableNativeFeedback>
        </View>
        )
    }

    return Platform.OS === 'ios' ? ios() : android()
}

export default FloatingActionButton
