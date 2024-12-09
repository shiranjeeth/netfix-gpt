import React,{useEffect,useState} from 'react'
import logo from '../images/logo.png';
import userIcon from '../images/user-icon.png';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {removeUser}  from '../utils/Slices/userSlice';


const Header = () => {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState(null);
  const [loading,setLoading] = useState(true)


  /// on inital pageload get the userDetails if user details are not there show the loading screen
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setCurrentUser(currentUser); // User is signed in
      } else {
        setCurrentUser(null); // No user is signed in
      }
      setLoading(false)
    });

    // Clean up listener on component unmount
    return () => unsubscribe();
  }, []);


  // Show loading when the page is loading
  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner if desired
  }

  if (currentUser) {
    // Log the current user's details for debugging
    console.log("Current User Details:", currentUser);
    
    // Here you can check specific properties like currentUser.email or currentUser.uid if needed
  } else {
    console.log("No user is currently signed in.");
  }


  const userName = currentUser ? currentUser.displayName || 'Guest' : 'Guest';
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");

      })
      .catch((error) => {
        console.error("Error signing out:", error);
        navigate("/error");
      });
  };

  return (
    <>
      <div className="absolute px-8 py-4 bg-gradient-to-b from-black to-gray-900 w-full flex items-center justify-between shadow-lg">
        {/* Left aligned logo */}
        <img className="w-44" src={logo} alt="Netflix Logo" />
        
        {/* Right aligned user info and signout */}
        <div className="flex items-center space-x-6">
          <div className="text-white text-lg font-medium">
            <h2>Hi, {userName}</h2>
          </div>
          <div className="flex items-center space-x-3">
            <img className="w-10 h-10 rounded-full border-2 border-gray-300" src={userIcon} alt="user-icon" />
            <button
              className="text-white bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  )
}


export default Header