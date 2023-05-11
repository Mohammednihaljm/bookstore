import React, { useState } from "react";
import "./Loginform.css"
import axios from "axios";

function Loginform() {
  const [Email,setEmail]=useState("")
  const [Password,setPassword]=useState("")


  const onLogin=async(e)=>{
    e.preventDefault()
    try{
      const config={
        headers:{
          "Content-type":"application/json"
        },
      }
    
    const data=await axios.post("http://localhost:4000/Login",{Email,Password},config)
    console.log(data.data)
    localStorage.setItem('useinfo',JSON.stringify(data.data))
    console.log(data.data);
   }catch(error){
    console.log("couldnot Login",error)
   }
  }

  return (
    <div className="page">
    <div className="cover">
        <h1>Login</h1>
        <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="password"onChange={(e)=>setPassword(e.target.value)} />

        <div className="login-btn" type="submit"  onClick={onLogin}>Login</div>

        <p className="text">or login using</p>

        <div className="alt-login">
            <div className="facebook"></div>
            <div className="google"></div>

        </div>
        
    </div>
    </div>
  )
}

export default Loginform