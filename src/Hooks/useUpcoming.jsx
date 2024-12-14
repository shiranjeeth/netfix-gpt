import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { UpComing } from '../utils/Slices/MovieSlice';
import { API_OPTIONS } from '../utils/Constants';

const useUpcoming = () => {

    const dispatch = useDispatch()


    const upComingMovies = async () =>{
      const data = await fetch(  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS );
      const json = await data.json();
      console.log(json.results)
      dispatch(UpComing(json.results))
    }
  
    useEffect(()=>{
        upComingMovies();
    },[])

}

export default useUpcoming