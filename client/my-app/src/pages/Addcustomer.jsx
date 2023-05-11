import React, { useState } from 'react'
import axios from 'axios'

function Addcustomer() {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Addressline1, setAddressline1] = useState("")
    const [Addressline2, setAddressline2] = useState("")
    const [City, setCity] = useState("")
    const [State, setState] = useState("")
    const [Pincode, setPincode] = useState("")
    const [Country, setCountry] = useState("")

 const onSubmit=async(e)=>{
    e.preventDefault();

    try {
        const config={
            headers:{
                "content-type":"application/json"
            },

        }
        const data=await axios.post("http://localhost:4000/Customer",{Name,Email,Addressline1,Addressline2,City,State,Pincode,Country},config)
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
              Addressline1
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='Addressline1'
           onChange={(e)=>setAddressline1(e.target.value)}/>
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              Addressline2
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='Addressline2'
           onChange={(e)=>setAddressline2(e.target.value)} />
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              City
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='City'
           onChange={(e)=>setCity(e.target.value)}/>
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              State
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='State'
           onChange={(e)=>setState(e.target.value)}/>
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              Pincode
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='Pincode'
           onChange={(e)=>setPincode(e.target.value)}/>
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              Country
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='Country'
           onChange={(e)=>setCountry(e.target.value)}/>
           
           <div style={{marginTop:"10px"}} className="signup-btn " type='submit' onClick={onSubmit}>submit</div>
           

      </div>
      </form>
      
    </div>   
   
  </div>
  )
}

export default Addcustomer