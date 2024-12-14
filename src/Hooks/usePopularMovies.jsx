import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addPopular } from '../utils/Slices/MovieSlice';
import { API_OPTIONS } from '../utils/Constants';

const usePopularMovies = () => {
    const dispatch = useDispatch()

    
    const populerMovies = async () =>{
      const data = await fetch(  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS );
      const json = await data.json();
      console.log(json.results)
      dispatch(addPopular(json.results))
    }
  
    useEffect(()=>{
        populerMovies();
    },[])
}

export default usePopularMovies