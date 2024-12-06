export const checkValidation = (name,email,password)=>{
     const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
     const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
     

     if (name !== undefined && (name.trim() === "" || !name)) {
        return "Enter your Name";
      }

     if(!isEmailValid){
        return "Invalid Email"
     }
     if(!isPasswordValid){
        return "Invalid Password"
     }
   

     return null;
}