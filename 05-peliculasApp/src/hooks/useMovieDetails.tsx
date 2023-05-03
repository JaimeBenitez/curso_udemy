import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { MovieFull } from "../interfaces/movieInterface";
import { Cast, CreditsResponse } from "../interfaces/creditsInterface";

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
    
}

const useMovieDetails = ( movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: []
  });

  const getMovieDetails = async() => {
    try{
    const movieDetailsPromise =  movieDB.get<MovieFull>(`/${movieId}`)
    const castPromise =  movieDB.get<CreditsResponse>(`/${movieId}/credits`)
    const [ movieDetailsResponse, castPromiseResponse ] = 
    await Promise.all([ 
      movieDetailsPromise, castPromise 
    ])
  
    setState({
      isLoading: false,
      movieFull: movieDetailsResponse.data,
      cast: castPromiseResponse.data.cast
    })
  }catch(error){
    console.log("Error en detalles: " + error)
  }
}


  useEffect(() => {
    getMovieDetails();
  }, []) 

  return {
      ...state
  }

}


export default useMovieDetails
