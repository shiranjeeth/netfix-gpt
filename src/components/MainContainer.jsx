import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie = movies[0];
    console.log(mainMovie);
    const {original_title,overview,id} = mainMovie;
  return (
    <>
    <VideoBackground movieID={id}/>
   <VideoTitle title={original_title} description={overview}/>
   </>
  )
}

export default MainContainer