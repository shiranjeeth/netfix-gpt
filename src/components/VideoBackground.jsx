import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/Slices/MovieSlice';

const VideoBackground = ({movieID}) => {
  const dispatch = useDispatch();
  const trailerVideoFromStore = useSelector((store)=>store.movies?.TrailerVideo)
  const getMovieVideos = async ()=>{
   const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,API_OPTIONS);
   const json = await data.json()
  //  console.log(json);
   const Trailer = json.results.filter((videos)=>videos.type === "Trailer");  // get the trailer
   const Teaser = json.results.filter((videos)=>videos.type === "Teaser");  // get the teaser
  //  console.log(Teaser);
   const officialTrailer = Trailer ? Trailer[0] : Teaser[0] ;
  //console.log(officialTrailer);
  dispatch(addTrailerVideo(officialTrailer));
  }

  useEffect(()=>{
    getMovieVideos();
  },[])
  return (
<>
<iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailerVideoFromStore.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</>
  )
}

export default VideoBackground