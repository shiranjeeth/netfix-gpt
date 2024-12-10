import React from 'react'
import {  useSelector } from 'react-redux'
import useMovieTrailervideo from '../Hooks/useMovieTrailervideo';

const VideoBackground = ({movieID}) => {
 
 /// fetches my trailer video
  useMovieTrailervideo({movieID});

  const trailerVideoFromStore = useSelector((store)=>store.movies?.TrailerVideo)
  return (
<>
<iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailerVideoFromStore.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


</>
  )
}

export default VideoBackground