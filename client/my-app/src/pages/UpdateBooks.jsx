import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UpdateBooks() {
  
const [getbyid, setgetbyid] = useState([])
const [editinputs, seteditinputs] = useState({bookname:getbyid.bookname,author:getbyid.author,publication:getbyid.publication,year:getbyid.year,availability:getbyid.availability})
  const id = useParams().id


useEffect(() => {
 const fetchhandler=async()=>{
 await axios.get(`http://localhost:4000/getbyid/${id}`).then(res=>setgetbyid(res.data))
 }
 fetchhandler()
}, [id])

const handlechange=(e)=>{
  seteditinputs({...editinputs,[e.target.name]:e.target.value})
}

const handleupdate=()=>{
axios.put(`http://localhost:4000/Update/${id}`,editinputs).then(res=>seteditinputs(res.data))
}
console.log(editinputs);

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
                 defaultValue={getbyid.bookname}
                onChange={handlechange}
                name='bookname'
                  />
                <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
                    Author
                </label>
                <input 
                type="text"
                 className='form-control'
                 id='exampleFormControlInput1' 
                 placeholder='author name'
                 defaultValue={getbyid.author}
                 onChange={handlechange}
                 name='author'
                  />
                <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
                    Publication
                </label>
                <input 
                type="text"
                 className='form-control'
                 id='exampleFormControlInput1' 
                 placeholder='publication'
                 defaultValue={getbyid.publication}
                 onChange={handlechange}
                 name='publication'
                 />
                <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
                    Year
                </label>
                <input 
                type="text"
                 className='form-control'
                 id='exampleFormControlInput1' 
                 placeholder='year'
                 defaultValue={getbyid.year}
                 onChange={handlechange}
                 name='year'
                 
                  />
                <label htmlFor="exampleFormControlInput1" className='form-label text-white'>
                    Availability
                </label>
                <input 
                type="text"
                 className='form-control'
                 id='exampleFormControlInput1' 
                 placeholder='Availability'
                 defaultValue={getbyid.availability}
                 onChange={handlechange}
                 name='availability'
                 />
                 
                 <div style={{marginTop:"10px"}} className="signup-btn " type='submit' onClick={handleupdate}  >updatebook</div>
                 
     
            </div>
            
           
            </form>
            
          </div>   
    </div>
  )
}

export default UpdateBooks