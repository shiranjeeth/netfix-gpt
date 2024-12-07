import React,{useRef, useState} from 'react'
import Header from './Header'
import bg from '../images/ne3-bg.jpeg';
import { checkValidation } from '../utils/Validation';
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate(); // add this to navigate the user
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null)
   const [login,setLogin] = useState(true)
   const [ValidationMessage,setValidationMessage] = useState("");
   

    const toggleSignupForm = ()=>{
        setLogin(!login)
    }

   const handleClick=()=>{

      const nameValue = login ? undefined : (name.current ? name.current.value : "");

      let validationMsg = checkValidation(nameValue,email.current.value,password.current.value);
      setValidationMessage(validationMsg)

     if(validationMsg)return;
    
      if(!login){
        createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
          console.log("Sucessfully signed in"); // if user sucessfully logged in navigate to browse
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(`ERROR CODE :${errorCode}  ERROR MSG: ${errorMessage}`)
         
        });
      }else{
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Login 
          const user = userCredential.user;
          navigate("/browse");  // if user sucessfully signin navigate to browse
          console.log(user);
          console.log("Sucessfully loggedIn");
  
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(`ERROR CODE :${errorCode}  ERROR MSG: ${errorMessage}`)
          setValidationMessage("Invalid Credentials") 
        });
      }

   } 

  return (
    <div> 
        <Header />
        {/* background image set to login page */}
        <div className='overflow-hidden w-full h-screen'> 
      <img src={bg} alt="Netflix Background" className="w-full h-full object-cover object-center" />
      </div>

      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/12 bg-black bg-opacity-80 p-8 rounded-md" onSubmit={(e)=>e.preventDefault()}>
        <h1 className="text-white text-2xl mb-6">{login ? "Login" : "SignUp"}</h1>

        {!login && (<input
          type="text"
          placeholder="Enter your Name" ref={name}
          className="w-full p-2 mb-4 bg-gray-800 text-white rounded-md"
        />) }
       
        <input
          type="text"
          placeholder="Enter the Email Address" ref={email}
          className="w-full p-2 mb-4 bg-gray-800 text-white rounded-md"
        />
        <input
          type="password"
          placeholder="Enter the Password" ref={password}
          className="w-full p-2 mb-4 bg-gray-800 text-white rounded-md"
        />
        <p className="py-4 text-red-500 font-bold text-lg">{ValidationMessage}</p>
        <button className="w-full py-2 bg-red-600 text-white rounded-md cursor-pointer" onClick={handleClick}>{login ? "login" : "Signup"}</button>
        <p className='py-4 text-white' onClick={toggleSignupForm}>{login ? "Register Now" : "Login if Already a user"}</p>
      </form>

    </div>
  )
}

export default Login