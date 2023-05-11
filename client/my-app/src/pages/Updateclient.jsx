import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function Updateclient() {
const [getbyid, setgetbyid] = useState([])
const [editinput, seteditinput] = useState({Name:getbyid.Name,Username:getbyid.Username,Email:getbyid.Email,Signedstatus:getbyid.Signedstatus,Role:getbyid.Role,Phonenumber:getbyid.Phonenumber})
const id = useParams().id

useEffect(() => {
  const fetchhandler=async()=>{
   await axios.get(`http://localhost:4000/getclient/${id}`).then((res)=>setgetbyid(res.data))
  }

  fetchhandler() 
},[id])

const handelchange=(e)=>{
seteditinput({...editinput,[e.target.name]:e.target.value})
}


const onSubmit=()=>{
    axios.put(`http://localhost:4000/updateclient/${id}`,editinput).then((res)=>seteditinput(res.data))
}
console.log(editinput)




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
           defaultValue={getbyid.Name}
           onChange={handelchange}
           name='Name'
           />
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              Username
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='Username'
           defaultValue={getbyid.Username}
           onChange={handelchange}
           name='Username'
           />
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              Email
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='Email'
           defaultValue={getbyid.Email}
           onChange={handelchange}
           name='Email'
          />
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              Signedstatus
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='Signedstatus'
           defaultValue={getbyid.Signedstatus}
           onChange={handelchange}
           name='Signedstatus'
            />
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              Role
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='Role'
           defaultValue={getbyid.Role}
           onChange={handelchange}
           name='Role'
           />
          <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
              Phonenumber
          </label>
          <input 
          type="text"
           className='form-control'
           id='exampleFormControlInput1' 
           placeholder='Phonenumber'
           defaultValue={getbyid.Phonenumber}
           onChange={handelchange}
           name='Phonenumber'
           />
           
           <div style={{marginTop:"10px"}} className="signup-btn " type='submit' onClick={onSubmit}>Update Client</div>
           

      </div>
      </form>
      
    </div>   
   
  </div>
  )
}

export default Updateclient