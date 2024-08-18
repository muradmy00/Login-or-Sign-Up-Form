import { useState } from 'react';
import './InputForm.css'
//import '/src/show.js'



function InputForm() {


    const [action,setAction] = useState("Sign Up");

    const [password,setPassword] = useState('');password
    
    const [showpassword,setShowpassword] = useState(false);


    const handlepassword = (e) => {
     setPassword(e.target.value);
    }
    const handleshowpassword = () => {
     setShowpassword(!showpassword);
    }

    



    // const pass = document.getElementById("pass");
    // const show = document.getElementById("show");

    // show.onClick = () => {

    //   pass.type = show.click?"text":"password"

    // }

  return (

    <div className='container'>
       
      
      <div className='header'>

      <div className="text">{action}</div>
      <div className="underline"></div>

      </div>
      
      <div className="inputs">

        {action === "Login"?<div></div>:<div className="input">
         <i className="fa-solid fa-user"></i>
         <input type="text" placeholder='Name'/>
      </div>}


      <div className="input">
         <i className="fa-solid fa-envelope"></i>
         <input type="email" placeholder='Email or Phone'/>
      </div>

      <div className="input">
         <i className="fa-solid fa-lock"></i>
         <input id='pass' onChange={handlepassword} type={showpassword?"text":"password"} placeholder='Password' />{showpassword ? <i className="fa-solid fa-eye" onClick={handleshowpassword}></i>:<i className="fa-solid fa-eye-slash" onClick={handleshowpassword}></i>}

      </div>

     


      </div>

      {action === "Sign Up"?<div></div>:<div className="forgot_password">
        Forgot Password? <span>Click Here!</span>
      </div>}


        <div className="submit_container">

        <div className={action==="Login"?"submit gray":"submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
        <div className={action === "Sign Up"?"submit gray":"submit"} onClick={() => {setAction("Login")}}>Login</div>


        </div>

      
    </div>
  );
}

export default InputForm
