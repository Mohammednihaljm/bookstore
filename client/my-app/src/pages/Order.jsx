import React, { useEffect, useState } from 'react'
import "./Customer.css"
import {  MDBBtn, MDBTable, MDBTableHead, MDBTableBody,} from 'mdb-react-ui-kit';
import axios from 'axios';
import {} from 'react-router-dom';


function Order() {
    const [Data, setData] = useState("")

    useEffect(() => {
      const fetch=async(req,res)=>{
        await axios.get("http://localhost:4000/getorder").then(res=>setData(res.data))
      
      }
      fetch() 
        
      
    }, [])
 
    function deleteclient(_id){
        fetch(`http://localhost:4000/deletorder/${_id}`,{
         method:'delete' 
        }).then((result)=>{
          result.json().then((resp)=>{
            console.warn(resp)
          })
        })
      
      }    



  return (
    <div className='first'>
    <div className='second'>
    <MDBTable align='middle'>
    <MDBTableHead>
      
      <tr>
        <th scope='col'>Name</th>
        <th scope='col'>Orderid</th>
        <th scope='col'>Product</th>
        <th scope='col'>Noofproducts</th>
        <th scope='col'>Date</th>

      </tr>
      
    </MDBTableHead>
    
    <MDBTableBody>
      {Data && Data.map((item,index)=>(
      <tr>
        <td>
          <div className='d-flex align-items-center'>
            <img
              src='https://mdbootstrap.com/img/new/avatars/8.jpg'
              alt=''
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>{item.Firstname}</p>
              <p className='text-muted mb-0'>{item.Email}</p>
            </div>
          </div>
        </td>
        <td>{item.Orderid}</td>
        <td>{item.Product}</td>
        <td>{item.Noofproduct}</td>
        <td>{item.Date}</td>
        
        <td>
          <div className='btn-group' color='link' rounded size='md'>
            
           <MDBBtn className='btn btn-danger' onClick={()=>deleteclient(item._id)}>deleted</MDBBtn> 
            
            
          </div>
        </td>
      </tr>     
      ))}
    </MDBTableBody>
     </MDBTable>
   </div> 
   </div>  
  )
}

export default Order