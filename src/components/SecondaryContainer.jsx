import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'



const SecondaryContainer = () => {

  const movies = useSelector((store)=>store.movies);
  // console.log(movies.nowPlayingMovies);
  console.log(movies.addPopularMovies);
  return (
    <>
    <div className='bg-black'>
      <div className='-mt-27 pl-12 relative z-20'>
   <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
   <MovieList title={"Popular"} movies={movies.addPopularMovies}/>
   <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
   <MovieList title={"UP Coming"} movies={movies.upComingMovies}/>
   </div>
   </div>
   </>
  )
}

export default SecondaryContainer