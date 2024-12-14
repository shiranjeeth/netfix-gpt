import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { topRated } from '../utils/Slices/MovieSlice';
import { API_OPTIONS } from '../utils/Constants';

const useTopRated = () => {
    const dispatch = useDispatch()


    const topRatedMovies = async () =>{
      const data = await fetch(  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS );
      const json = await data.json();
      console.log(json.results)
      dispatch(topRated(json.results))
    }
  
    useEffect(()=>{
      topRatedMovies();
    },[])
}

export default useTopRated