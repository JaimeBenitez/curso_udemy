import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';


interface Props {
    pokemon: PokemonFull
}
const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    style={{
        ...StyleSheet.absoluteFillObject
    }}>
        <View style={{ ...styles.container, marginTop: 370 }}>
            <Text style={styles.title}>Types</Text>
            <View style={{ flexDirection: 'row' }}>
                {
                    pokemon.types.map(({ type }) => (
                        //En un map se puede devolver mas de un elemento independiente siempre y cuando cada uno tenga su key
                        <Text style ={{...styles.regularText, marginRight: 10}} key={type.name}> {type.name}</Text>
                    ))
                }
            </View>

            {/* Peso  */}
            <Text style={ styles.title }>Peso</Text>
            <Text style={ styles.regularText }>{pokemon.weight} lb</Text>

        </View>
        {/* Sprites */}
        <View style={ styles.container }>
            <Text style={ styles.title }>Sprites</Text>
        </View>
        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
            <View>
                <FadeInImage uri={pokemon.sprites.front_default} style={ styles.basicSprite } /> 
                <FadeInImage uri={pokemon.sprites.front_shiny} style={ styles.basicSprite } />   
            </View>
            <View> 
                <FadeInImage uri={pokemon.sprites.back_default} style={ styles.basicSprite } />  
                <FadeInImage uri={pokemon.sprites.back_shiny} style={ styles.basicSprite } />   
            </View> 
        </ScrollView>
        {/* Habilidades  */}
        <View style={{ ...styles.container }}>
            <Text style={styles.title}>Skills</Text>
            <View style={{ flexDirection: 'row' }}>
                {
                    pokemon.abilities.map(({ ability }) => (
                        <Text style ={{...styles.regularText, marginRight: 10}} key={ability.name}>
                            {ability.name}
                        </Text>
                    ))
                }
            </View>
        </View>
        {/* Movimientos  */}
        <View style={{ ...styles.container }}>
            <Text style={styles.title}>Moves</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    pokemon.moves.map(({ move }) => (
                        <Text style ={{...styles.regularText, marginRight: 10}} key={move.name}>{move.name} | </Text>
                    ))
                }
            </View>
        </View>
        {/* Stats  */}
        <View style={{ ...styles.container }}>
            <Text style={styles.title}>Stats</Text>
            <View>
                {
                    pokemon.stats.map(( stat, i ) => (
                        <View key={stat.stat.name + i } style={{ flexDirection: 'row'}}>
                            <Text style ={{...styles.regularText, marginRight: 10, width: 150}}>{stat.stat.name}: </Text>
                            <Text style ={{...styles.regularText, fontWeight: 'bold'}}>{stat.base_stat} </Text>
                        </View>
                    ))
                }
            </View>
            {/* Sprite final */}
            <View style={{
                marginBottom: 20,
                alignItems: 'center',
            }}>
                <FadeInImage uri={pokemon.sprites.front_default} style={ styles.basicSprite } />

            </View>
        </View>
    </ScrollView>
  )
}

export default PokemonDetails


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20
    },
    regularText: {
        fontSize: 19
    },
    basicSprite: {
        width: 100,
        height: 100
    }
})