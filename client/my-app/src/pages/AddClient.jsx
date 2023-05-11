import React, { useState } from 'react'
import axios from 'axios'

function AddClient() {
    const [Name, setName] = useState("")
    const [Username, setUsername] = useState("")
    const [Email, setEmail] = useState("")
    const [Signedstatus, setSignedstatus] = useState("")
    const [Role, setRole] = useState("")
    const [Phonenumber, setPhonenumber] = useState("")
  
   const onsubmit=async(e)=>{
   e.preventDefault();
   try {
    const config={
      headers:{
        "content-type":"application/json"
      },
    }
    const data=await axios.post("http://localhost:4000/Client",{Name,Username,Email,Signedstatus,Role,Phonenumber},config)
    console.log(data.data)
    localStorage.setItem('useinfo',JSON.stringify(data.data))
    console.log(data.data);
  } catch (error) {
    console.log("couldnot addclient",error)
  }
   }
  return (
    <div className='bg-dark d-flex justify-content-center align-items-center' style={{minHeight:"91.5vh"}}>
    <div className='container p-4'>
      <form action="">
      <div className='mb-3' >
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              Name
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='Name'
           onChange={(e)=>setName(e.target.value)}
           />
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              Username
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='Username'
           onChange={(e)=>setUsername(e.target.value)}
           />
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              Email
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='Email'
           onChange={(e)=>setEmail(e.target.value)}
          />
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              Signedstatus
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='Signedstatus'
           onChange={(e)=>setSignedstatus(e.target.value)}
            />
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              Role
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='Role'
           onChange={(e)=>setRole(e.target.value)}
           />
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              Phonenumber
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='Phonenumber'
           onChange={(e)=>setPhonenumber(e.target.value)}
           />
           
           <div style={{marginTop:"10px"}} className="signup-btn " type='submit' onClick={onsubmit}>Add Client</div>
           

      </div>
      </form>
      
    </div>   
   
  </div>
  )
}

export default AddClient