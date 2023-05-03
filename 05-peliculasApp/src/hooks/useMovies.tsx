import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { Movie, MovieDBMoviesResponse } from "../interfaces/movieInterface"

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}
const useMovies = () => {

  const [ isLoading, setIsLoading] = useState(true)
  const [ moviesState, setMoviesState ] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: []
  })

  const getMovies = async () => {
    try{
    const nowPlayingProm = movieDB.get<MovieDBMoviesResponse>('/now_playing')
    const popularProm    = movieDB.get<MovieDBMoviesResponse>('/popular')
    const topRatedProm   = movieDB.get<MovieDBMoviesResponse>('/top_rated')
    const upcomingProm   = movieDB.get<MovieDBMoviesResponse>('/upcoming')

    const [nowPlayingResp, popularResp, topRatedResp, upcomingResp]= 
    await Promise.all(
      [nowPlayingProm, popularProm, topRatedProm, upcomingProm]
      )
    setMoviesState({
      nowPlaying: nowPlayingResp.data.results,
      popular: popularResp.data.results,
      topRated: topRatedResp.data.results,
      upcoming: upcomingResp.data.results
    })

    setIsLoading(false)
    }catch(error){
      console.log("Error al cargar pelis: " + error)
    }
  } 

  useEffect(() => {
    //now_playing
    getMovies()
  },[])
  return {
    ...moviesState,
    isLoading
  }
}

export default useMovies

