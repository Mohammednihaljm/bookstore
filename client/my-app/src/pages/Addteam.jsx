
import axios from 'axios'
import React, { useState } from 'react'



function Addteam() {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Dateofbirth, setDateofbirth] = useState("")
    const [Gender, setGender] = useState("")
    const [Description, setDescription] = useState("")
    const [Role, setRole] = useState("")
    const [Phonenumber, setPhonenumber] = useState("")
    const [Uploadprofilepicture, setUploadprofilepicture] = useState("")


    const onSubmit=async(e)=>{
        e.preventDefault();

        try {
            const config={
                headers:{
                    "content-type":"application/json"
                },
    
            }
            const data=await axios.post("http://localhost:4000/Teammember",{Name,Email,Dateofbirth,Gender,Description,Role,Phonenumber,Uploadprofilepicture},config)
            console.log(data.data)
            localStorage.setItem('useinfo',JSON.stringify(data.data))
            console.log(data.data);    
        } catch (error) {
            console.log("couldnot addcustomer",error)
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
           onChange={(e)=>setName(e.target.value)} />
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              Email
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='Email'
           onChange={(e)=>setEmail(e.target.value)} />
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              Dateofbirth
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='Date of birth'
           onChange={(e)=>setDateofbirth(e.target.value)}/>
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              Gender
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='Gender'
           onChange={(e)=>setGender(e.target.value)} />
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              Description
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='Description'
           onChange={(e)=>setDescription(e.target.value)}/>
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              Role
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='Role'
           onChange={(e)=>setRole(e.target.value)}/>
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              Phonenumber
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='Phonenumber'
           onChange={(e)=>setPhonenumber(e.target.value)}/>
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              Uploadprofile
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='profile'
           onChange={(e)=>setUploadprofilepicture(e.target.value)}/>
           
           <div style={{marginTop:"10px"}} className="signup-btn " type='submit' onClick={onSubmit}>submit</div>
           

      </div>
      </form>
      
    </div>   
   
  </div> 
  )
}

export default Addteam