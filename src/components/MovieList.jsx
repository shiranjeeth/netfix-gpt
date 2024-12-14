import React from 'react'
import MovieCard from "./MovieCard.jsx"
const MovieList = ({title,movies}) => {
  console.log(movies);

  // if (!Array.isArray(movies)) {
  //   return <div>No movies available</div>;
  // }
  return (
    <>
      <div className='py-2'>
      <h1 className='text-3xl py-4  font-bold text-white'>{title}</h1>
      <div className='flex overflow-x-auto space-x-4 px-4'>
      <div className='flex'>
    {movies?.map((movie)=>{
        const poster_path = movie.poster_path;
        return <MovieCard key={movie.id} posterPath={poster_path} />
    })}
    </div>
    </div>
    </div>
    </>
  )
}

export default MovieList