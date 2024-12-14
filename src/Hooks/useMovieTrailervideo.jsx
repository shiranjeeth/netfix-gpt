import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utils/Slices/MovieSlice';

const useMovieTrailervideo = ({movieID}) => {

    const dispatch = useDispatch();
    
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
}

export default useMovieTrailervideo