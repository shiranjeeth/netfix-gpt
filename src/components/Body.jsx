import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import {  onAuthStateChanged } from "firebase/auth";
import { getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/Slices/userSlice';
const Body = () => {
  const dispatch = useDispatch()

     // functionality to save the user details in the redux store
     useEffect(()=>{
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid , email , displayName} = user;
          dispatch(addUser({uid : uid, email : email , displayName : displayName})); // if logged in add the user to the store
        } else {
        dispatch(removeUser);// if logged out  remove the user to the store
        }
      });
    },[])

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element : <Login />
        },
        {
          path : "/browse",
          element : <Browse/>
        }
    ])


  return (
    <>
     <RouterProvider router={appRouter} />
    </>
  )
}

export default Body