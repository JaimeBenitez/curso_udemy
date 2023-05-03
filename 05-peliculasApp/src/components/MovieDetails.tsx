import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { MovieFull } from '../interfaces/movieInterface'
import { Cast } from '../interfaces/creditsInterface'
import Icon  from 'react-native-vector-icons/Ionicons'
import currencyFormater from 'currency-formatter';
import CastItem from './CastItem'


interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}

const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
    {/* Detalles */}
    <View style={{ marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
            <Icon 
                name="star-outline"
                color="grey"
                size={16}
                />
            <Text>{movieFull.vote_average}</Text>

            <Text style={{ marginLeft: 5 }}>
                - { movieFull.genres.map( g => g.name).join(', ') }
            </Text>
        </View>
    
        {/* Historia */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
            Historia
        </Text>
        <Text style={{ fontSize: 16 }}>
            {movieFull.overview}
        </Text>
        {/* Presupuesto */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
            Presupuesto
        </Text>
        <Text style={{ fontSize: 18 }}>
            {currencyFormater.format(movieFull.budget, { code: 'USD'})}
        </Text>
    
        {/* Casting */}
        <View style={{ marginTop: 10, marginBottom: 100}}>
            <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>Actores</Text>
            <FlatList style={{ marginTop: 10, height: 75 }}
                //De donde saca los datos 
                data={ cast }
                //La key, como en los v-for de Vue solo que aqui necesita decir que dato sacas de cada item y transformarlo a string
                keyExtractor = { (item) => item.id.toString() }
                //Que vas a renderizar, en este caso por cada elemento de la lista vas a renderizar un CastItem con los datos del elemento
                renderItem={ ({ item }) => <CastItem actor={item} />}
                //Nos indica el tipo de scroll
                horizontal={true}            
                showsHorizontalScrollIndicator={false}
            />
        </View>
    </View>
    </>
  )
}

export default MovieDetails
 