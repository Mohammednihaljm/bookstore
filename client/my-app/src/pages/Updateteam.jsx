import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function Updateteam() {
    const [getbyid, setgetbyid] = useState([])
    const [editinputs, seteditinputs] = useState({Name:getbyid.Name,Email:getbyid.Email,Dateofbirth:getbyid.Dateofbirth,Gender:getbyid.Gender,Description:getbyid.Description,Role:getbyid.Role,Phonenumber:getbyid.Phonenumber,Uploadprofilepicture:getbyid.Uploadprofilepicture})

    const id = useParams().id


    useEffect(() => {
        const fetchhandler=async()=>{
        await axios.get(`http://localhost:4000/getteam/${id}`).then(res=>setgetbyid(res.data))
        }
        fetchhandler()
       }, [id])

       const handlechange=(e)=>{
        seteditinputs({...editinputs,[e.target.name]:e.target.value})
      }   

      const onSubmit=()=>{
        axios.put(`http://localhost:4000/Updateteam/${id}`,editinputs).then(res=>seteditinputs(res.data))
        }
        console.log(editinputs);
        


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
         onChange={handlechange}
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
         onChange={handlechange}
         name='Email'
          />
        <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
            Dateofbirth
        </label>
        <input 
        type="text"
         className='form-control'
         id='exampleFormControlInput1' 
         placeholder='publication'
         defaultValue={getbyid.Dateofbirth}
         onChange={handlechange}
         name='Dateofbirth'
         />
        <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
            Gender
        </label>
        <input 
        type="text"
         className='form-control'
         id='exampleFormControlInput1' 
         placeholder='Gender'
         defaultValue={getbyid.Gender}
         onChange={handlechange}
         name='Gender'
         
          />
        <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
            Description
        </label>
        <input 
        type="text"
         className='form-control'
         id='exampleFormControlInput1' 
         placeholder='Description'
         defaultValue={getbyid.Description}
         onChange={handlechange}
         name='Description'
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
         onChange={handlechange}
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
         onChange={handlechange}
         name='Phonenumber'
         />
        <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
            Uploadprofilepicture
        </label>
        <input 
        type="text"
         className='form-control'
         id='exampleFormControlInput1' 
         placeholder='upload'
         defaultValue={getbyid.Uploadprofilepicture}
         onChange={handlechange}
         name='Uploadprofilepicture'
         />
         
         <div style={{marginTop:"10px"}} className="signup-btn " type='submit' onClick={onSubmit}>update</div>
         

    </div>
    
   
    </form>
    
  </div>   
 


</div>   
  )
}

export default Updateteam