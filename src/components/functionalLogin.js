import React, { Component, useState } from "react";

const Login  = () => {
   
    
      const [email,setEmail] =  useState(null)
    const [password, setPassword] = useState(null)
      const [ emailError, setEmailError]= useState(null)
      const [ passwordError, setPasswordError]= useState(null)



 const handleValidation = () =>{
 
    
    // let formIsValid = true;

    

    if(password){
    //    if(setPassword("password").match(/^[a-zA-Z]+$/)){
          
    //      setMessage;
    //    }        
    }
        if(!password ){
    //    formIsValid = false;
 setPasswordError("Password is required")
       
    }

    else{
        setPasswordError("")
    }
    //Email
    if(!email ){
    //    formIsValid = false;
setEmailError("Email is required")
     
    }
    else{
        setEmailError("")
    }

    // if(email){
    //    let lastAtPos = setEmail(email).lastIndexOf('@');
    //    let lastDotPos = setEmail(email).lastIndexOf('.');

   
    //     }
    }  

  
//    return formIsValid;



// const and = () =>{ 
//     <span style={{color: "red" , fontSize : '12px'}}>{passwordError}</span>
// }
// const or = () =>{ 
//     <span style={{color: "red" , fontSize : '12px'}}>{emailError}</span>
// }


console.log(email)

  console.log(password)

 console.log("Email Error", emailError)

console.log("Password Error", passwordError)

       
        return(



            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input  onChange =  {(e) =>  setEmail(e.target.value)}  type="email" className="form-control" placeholder="Enter email" />
                    { <span style={{color: "red" , fontSize : '12px'}}>{emailError}</span> }
                
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input  onChange =  {(e) => setPassword(e.target.value)}  type="password" className="form-control" placeholder="Enter password" />
                    {  <span style={{color: "red" , fontSize : '12px'}}>{passwordError}</span>}
                    {/* <p style = {{color : 'red', fontSize : '12px'}}> This field is required </p> */}
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <a onClick =  { () => handleValidation()}   className="btn btn-primary btn-block">Submit</a>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>




        );
    }
export default Login;