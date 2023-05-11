import React from 'react'
import "./Booksection"
import { Link } from 'react-router-dom'
const Booksection = ({data}) => {
    console.log(data)
    function deletebook(_id){
     fetch(`http://localhost:4000/delete/${_id}`,{
      method:'Delete'
     }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
      })
     })
    }
  return (
 <div className='card'> 
  <div className='d-flex justify-content-around align-items-center flex-wrap my-3'>
    {data && 
    data.map((item,index)=>(
      
    <div 
     className='' style={{width:"200px",height:"250px",backgroundColor:"white"}}
     >
     <div className='card btn-group d-flex align-items-center' >

      <h6 style={{fontSize:"15px"}} className='my-1 px-2'>Book name:{item.bookname}</h6>
      <h6 style={{fontSize:"15px"}} className='m-0 px-2'>author: {item.author}</h6>
      <h6 style={{fontSize:"15px"}} className='m-0 px-2'>Publication: {item.publication}</h6>
      <h6 style={{fontSize:"15px"}} className='m-0 px-2'>Publication year: {item.year}</h6>
      <h6 style={{fontSize:"15px"}} className='m-0 px-2'>availability: {item.availability}</h6>
      
      <button className='btn btn-primary ' style={{width:"80px" }}   ><Link to={`/Update/${item._id}`}  style={{color:'white',textDecoration:"none"}}> update</Link></button>
      <button className='btn btn-danger ' style={{width:"80px"}} onClick={()=>deletebook(item._id)}>delete</button>
     </div>
      

    </div>

      
    ))}
      
  </div>
 </div>



  
  )
  
}

export default Booksection;