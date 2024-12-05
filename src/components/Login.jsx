import React,{useState} from 'react'
import Header from './Header'
import bg from '../images/ne3-bg.jpeg';
const Login = () => {
   const [login,setLogin] = useState(true)
    const toggleSignupForm = ()=>{
        setLogin(!login)
    }
  return (
    <div> 
        <Header />
        {/* background image set to login page */}
        <div className='overflow-hidden w-full h-screen'> 
      <img src={bg} alt="Netflix Background" className="w-full h-full object-cover object-center" />
      </div>

      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/12 bg-black bg-opacity-70 p-8">
        <h1 className="text-white text-2xl mb-6">{login ? "Login" : "SignUp"}</h1>

        {!login && (<input
          type="text"
          placeholder="Enter your Name"
          className="w-full p-2 mb-4 bg-gray-800 text-white rounded-md"
        />) }
       
        <input
          type="text"
          placeholder="Enter the Email Address"
          className="w-full p-2 mb-4 bg-gray-800 text-white rounded-md"
        />
        <input
          type="password"
          placeholder="Enter the Password"
          className="w-full p-2 mb-4 bg-gray-800 text-white rounded-md"
        />
        <button className="w-full py-2 bg-red-600 text-white rounded-md cursor-pointer">{login ? "login" : "Signup"}</button>
        <p className='py-4 text-white' onClick={toggleSignupForm}>{login ? "Register Now" : "Login if Already a user"}</p>
      </form>

    </div>
  )
}

export default Login