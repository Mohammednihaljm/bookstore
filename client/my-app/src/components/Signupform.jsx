import React, { useState } from "react";
import "./Signupform.css"
import axios from "axios";

function Signupform() {
const [First_name, setFirst_name] = useState("")
const [Last_name, setLast_name] = useState("")
const [Email, setEmail] = useState("")
const [Password, setPassword] = useState("")
 const  onSignup=async(e)=>{
  e.preventDefault();
  try {
    const config={
      headers:{
        "content-type":"application/json"
      },
    }
   const data=await axios.post("http://localhost:4000/Signup",{First_name,Last_name,Email,Password},config)
   console.log(data.data)
   localStorage.setItem('useinfo',JSON.stringify(data.data))
   console.log(data.data);
  } catch (error) {
    console.log("couldnot signup",error)
 
  }

 

 }
  return (
    <div className="page">
    <div className="cover">
       <h1>Sign up</h1>
       <input type="text" placeholder="First_name" onChange={(e)=>setFirst_name(e.target.value)} />
       <input type="text" placeholder="Last_name" onChange={(e)=>setLast_name(e.target.value)} />
       <input type="Email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
       <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />

       <div className="signup-btn" type='submit' onClick={onSignup}>Sign up</div>

     </div>    

    </div>
  )
}

export default Signupform