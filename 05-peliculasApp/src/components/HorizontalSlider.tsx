import React from 'react'
import { Movie } from '../interfaces/movieInterface';
import { FlatList, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
}

const HorizontalSlider = ({ title, movies }: Props) => {
  return (
    <View style={{ height: (title) ? 260 : 220 }}>
        {
            title && <Text style={{ fontSize: 30,fontWeight: 'bold', marginLeft: 10 }}>{ title }</Text>
        }
        <FlatList 
          data={movies}
          renderItem={({ item }) => (
          <MoviePoster movie={ item } width={ 140 } height={ 200 } marginHorizontal={ 8 } />
          )}
          keyExtractor={(item) => item.id.toString()} //La key debe ser string
          horizontal={ true }
          showsHorizontalScrollIndicator={ false}
        />
      </View>
  )
}

export default HorizontalSlider
