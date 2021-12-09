// import React, { Component } from "react";

// export default class Login extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: " ",
//             password: " ",
//         message: {}
        
//         };
//       }
    



// //   match() {
    
// //    const passwrd = "12345";
// //  const mail = "will@gmail.com";
// //  var form=  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  

// //  if((this.state.email.match(form) || (this.state.password.length < 10 )){
// //     console.log("Please enter username and password")
// //  }
// //    else
// //     alert("Invalid email address or password. Valid email address must have an @ symbol and passwords must have at least 10 characters");
 
   
 

// //  if(passwrd === this.state.password && mail === this.state.email){
// //     window.location.href="/nba-teams";
// //  }
// //     else
        
// //         alert("Incorrect Password or Email")

  
// //   }

//  handleValidation(){
 
//     let message = {};
//     let formIsValid = true;

//     //password
    

//     if(state.password !== null){
//        if(this.state.password["password"].match(/^[a-zA-Z]+$/)){
//           formIsValid = false;
//          message["password"] = "Only letters";
//        }        
//     }
//         if(!this.state.password["password"]){
//        formIsValid = false;
//        message["password"] = "This field is required";
//     }
//     //Email
//     if(!this.state.email["email"]){
//        formIsValid = false;
//        message["email"] = "This field is required";
//     }

//     if(this.state.email !== null){
//        let lastAtPos = this.state.email["email"].lastIndexOf('@');
//        let lastDotPos = this.state.email["email"].lastIndexOf('.');

//        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email["email"].indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email["email"].length - lastDotPos) > 2)) {
//           formIsValid = false;
//           message["email"] = "Email is not valid";
//         }
//    }  

//    this.setState({message: message});
//    return formIsValid;
// }

  
 

//     render() {


       
//         return (
//             <form>
//                 <h3>Sign In</h3>

//                 <div className="form-group">
//                     <label>Email address</label>
//                     <input  onChange =  {(e) => this.setState({email : e.target.value})}  type="email" className="form-control" placeholder="Enter email" />
//                     <span style={{color: "red" , fontSize : '12px'}}>{this.state.message["email"]}</span>
                
//                 </div>

//                 <div className="form-group">
//                     <label>Password</label>
//                     <input  onChange =  {(e) => this.setState({password : e.target.value})}  type="password" className="form-control" placeholder="Enter password" />
//                     <span style={{color: "red" , fontSize : '12px'}}>{this.state.message["password"]}</span>
                        
//                     {/* <p style = {{color : 'red', fontSize : '12px'}}> This field is required </p> */}
//                 </div>

//                 <div className="form-group">
//                     <div className="custom-control custom-checkbox">
//                         <input type="checkbox" className="custom-control-input" id="customCheck1" />
//                         <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
//                     </div>
//                 </div>

//                 <a onClick =  { () => this.handleValidation()}   className="btn btn-primary btn-block">Submit</a>
//                 <p className="forgot-password text-right">
//                     Forgot <a href="#">password?</a>
//                 </p>
//             </form>




//         );
//     }
// }