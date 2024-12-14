import {createSlice} from "@reduxjs/toolkit";

const  movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        addPopularMovies : null,
        topRatedMovies: null,
        upComingMovies : null,
        TrailerVideo : null
    },
    reducers : {
        addNowPlayingMovies : (state,action)=>{
          state.nowPlayingMovies = action.payload
        },
        addTrailerVideo : (state,action)=>{
         state.TrailerVideo = action.payload;
        },
        addPopular :(state,action)=>{
            state.addPopularMovies = action.payload;
           },
        topRated :(state,action)=>{
            state.topRatedMovies = action.payload;
        },
        UpComing :(state,action)=>{
            state.upComingMovies = action.payload;
        },

    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopular,topRated,UpComing} = movieSlice.actions

export default movieSlice.reducer