import Carousel from 'react-native-snap-carousel';
import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors'
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';



const { width: windowWidth } = Dimensions.get("window")
const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()
  const{ top } = useSafeAreaInsets()
  const { setMainColors } = useContext( GradientContext )
  const getPosterColor = async( index: number ) => {
    const movie = nowPlaying[index]
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`
    const [primary = 'green', secondary = 'orange' ] = await getImageColors( uri )
    setMainColors({primary, secondary})
  }
  //NOTA: si se realiza despues del if loading salta error
  useEffect(()=>{
    if( nowPlaying.length > 0 ){
      getPosterColor(0)
    }
  }, [nowPlaying])
  
  if( isLoading ){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color='red' size={100}/>
      </View>
    )
  }

  
  return (
    <GradientBackground >
      <ScrollView>
        <View style={{ marginTop: top + 20}}>


          <View style={{ height: 440 }}>

          {/* Carrusel principal */}
          <Carousel
            data={nowPlaying}
            renderItem={({ item })=> <MoviePoster movie={ item } />}
            sliderWidth={ windowWidth }
            itemWidth={ 300 }
            inactiveSlideOpacity={ 0.9 }
            onSnapToItem={ index => getPosterColor( index)}
          />

          
          </View>
          {/* Peliculas populares */}
          
          <HorizontalSlider title="Popular" movies={ popular } />
          <HorizontalSlider title="Top Rated" movies={ topRated } />
          <HorizontalSlider title="Upcoming" movies={ upcoming } />
        </View>
      </ScrollView>
    </GradientBackground>
  )
}

export default HomeScreen