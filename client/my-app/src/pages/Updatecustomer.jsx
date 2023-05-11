import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Updatecustomer() {
const [getbyid, setgetbyid] = useState([])
const [editinput, seteditinput] = useState({Name:getbyid.Name,Email:getbyid.Email,Addressline1:getbyid.Addressline1,Addressline2:getbyid.Addressline2,City:getbyid.City,State:getbyid.State,Pincode:getbyid.Pincode,Country:getbyid.Country})
const id=useParams().id


useEffect(() => {
const fetch=async()=>{
    await axios.get(`http://localhost:4000/getcustomer/${id}`).then((res)=>setgetbyid(res.data))
}

  fetch() 
    
  
}, [id])

const handelchange=(e)=>{
    seteditinput({...editinput,[e.target.name]:e.target.value})

}


const onSubmit=()=>{
    axios.put(`http://localhost:4000/updatecustomer/${id}`,editinput).then((res)=>seteditinput(res.data))
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
            Email
        </label>
        <input 
        type="text"
         className='form-control'
         id='exampleFormControlInput1' 
         placeholder='author name'
         defaultValue={getbyid.Email}
         onChange={handelchange}
         name='Email'
          />
        <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
            Addressline1
        </label>
        <input 
        type="text"
         className='form-control'
         id='exampleFormControlInput1' 
         placeholder='publication'
         defaultValue={getbyid.Addressline1}
         onChange={handelchange}
         name='Addressline1'
         />
        <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
            Addressline2
        </label>
        <input 
        type="text"
         className='form-control'
         id='exampleFormControlInput1' 
         placeholder='year'
         defaultValue={getbyid.Addressline2}
         onChange={handelchange}
         name='Addressline2'
         
          />
        <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
            City
        </label>
        <input 
        type="text"
         className='form-control'
         id='exampleFormControlInput1' 
         placeholder='Availability'
         defaultValue={getbyid.City}
         onChange={handelchange}
         name='City'
         />
        <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
            State
        </label>
        <input 
        type="text"
         className='form-control'
         id='exampleFormControlInput1' 
         placeholder='Availability'
         defaultValue={getbyid.State}
         onChange={handelchange}
         name='State'
         />
        <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
            Pincode
        </label>
        <input 
        type="text"
         className='form-control'
         id='exampleFormControlInput1' 
         placeholder='Availability'
         defaultValue={getbyid.Pincode}
         onChange={handelchange}
         name='Pincode'
         />
        <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
            Country
        </label>
        <input 
        type="text"
         className='form-control'
         id='exampleFormControlInput1' 
         placeholder='Availability'
         defaultValue={getbyid.Country}
         onChange={handelchange}
         name='Country'
         />
         
         <div style={{marginTop:"10px"}} className="signup-btn " type='submit' onClick={onSubmit}>update</div>
         

    </div>
    
   
    </form>
    
  </div>   
 


</div>  
  )
}

export default Updatecustomer