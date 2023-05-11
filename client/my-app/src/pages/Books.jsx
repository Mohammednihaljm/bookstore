import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Booksection from '../components/Booksection';

function Books() {

  const [Data, setData] = useState()

  useEffect(() => {  
  const fetch=async()=>{
    await axios.get("http://localhost:4000/getbook").then((res)=>setData(res.data))
  }
   fetch(); 
  });
  
  return (
    <div className='bg-dark' style={{minHeight:"91.5vh"}}>
     <div className='d-flex justify-content-center align-item-center py-3'>  
        <h4 className='text-white'>book section</h4>
     </div>
     {Data ? <Booksection data={Data}/>:
        <div className='card text-white'>Loading</div>
        }


    </div>
    
  )
}

export default Books