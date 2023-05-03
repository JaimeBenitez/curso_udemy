import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack'


interface Props {
    movie: Movie;
    height?: number;
    width?: number;
    marginHorizontal?: number;
}

//Esto es necesario para que ts no se queje del tipado en las versiones actuales de RN
export type RootStackParamList = {
  // Se le pasa el tipo del parametro necesario, undefined si no tiene
  DetailScreen: Movie
}

const MoviePoster = ({ movie, height = 420, width = 300, marginHorizontal = 2}: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`
  //Ojo, para este tipado especial es necesario importar los props de la navegacion concreta, en este caso Stack
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', movie)}
      activeOpacity={0.8}
      style={{
      width,
      height,
      marginHorizontal,
      paddingBottom: 20,
      paddingHorizontal: 7
    }}>
      <View style={styles.imageContainer}>
        <Image source={{ uri }}
        style={styles.image} />
      </View>
    </TouchableOpacity>
  )
}

export default MoviePoster


const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
    
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    //Ojo para android hay que añadirle tambien un backgroundColor invisible
    backgroundColor: '#0000'
  }
})