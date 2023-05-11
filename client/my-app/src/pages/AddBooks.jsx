import React, { useState } from 'react'
import axios, {} from 'axios'
const AddBooks=()=> {
  const [bookname, setbookname] = useState("")
  const [author, setauthor] = useState("")
  const [publication, setpublication] = useState("")
  const [year, setyear] = useState("")
  const [availability, setavailability] = useState("")

  const onSubmit=async(e)=>{
    e.preventDefault();
    try {
      const config={
        headers:{
          "content-type":"application/json"
        },
      }
      const data=await axios.post("http://localhost:4000/book",{bookname,author,publication,year,availability},config)
      console.log(data.data)
      localStorage.setItem('useinfo',JSON.stringify(data.data))
      console.log(data.data);
    } catch (error) {
      console.log("couldnot addbook",error)
    }
  }

      
    
    
  return (
    <div className='bg-dark d-flex justify-content-center align-items-center' style={{minHeight:"91.5vh"}}>
      <div className='container p-4'>
        <form action="">
        <div className='mb-3' >
            <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
                Book name
            </label>
            <input 
            type="text"
             className='form-control'
             id='exampleFormControlInput1' 
             placeholder='enter book name'
             onChange={(e)=>setbookname(e.target.value)} />
            <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
                Author
            </label>
            <input 
            type="text"
             className='form-control'
             id='exampleFormControlInput1' 
             placeholder='author name'
             onChange={(e)=>setauthor(e.target.value)} />
            <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
                Publication
            </label>
            <input 
            type="text"
             className='form-control'
             id='exampleFormControlInput1' 
             placeholder='publication'
             onChange={(e)=>setpublication(e.target.value)}/>
            <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
                Year
            </label>
            <input 
            type="text"
             className='form-control'
             id='exampleFormControlInput1' 
             placeholder='year'
             onChange={(e)=>setyear(e.target.value)} />
            <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
                Availability
            </label>
            <input 
            type="text"
             className='form-control'
             id='exampleFormControlInput1' 
             placeholder='Availability'
             onChange={(e)=>setavailability(e.target.value)}/>
             
             <div style={{marginTop:"10px"}} className="signup-btn " type='submit' onClick={onSubmit}>submit</div>
             
 
        </div>
        </form>
        
      </div>   
     
    </div>
  )
}

export default AddBooks