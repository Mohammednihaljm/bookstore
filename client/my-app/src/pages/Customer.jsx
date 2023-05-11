import React, { useEffect, useState } from 'react'
import "./Customer.css"
import {  MDBBtn, MDBTable, MDBTableHead, MDBTableBody,} from 'mdb-react-ui-kit';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Customer() {
    const [Data, setData] = useState("")

    useEffect(() => {
      const fetch=async(req,res)=>{
        await axios.get("http://localhost:4000/getcustomer").then(res=>setData(res.data))
      
      }
      fetch() 
        
      
    }, [])
 
    function deleteclient(_id){
        fetch(`http://localhost:4000/deletecustomer/${_id}`,{
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
        <th scope='col'>Addressline1</th>
        <th scope='col'>Addressline2</th>
        <th scope='col'>City</th>
        <th scope='col'>State</th>
        <th scope='col'>Pincode</th>
        <th scope='col'>Country</th>
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
              <p className='fw-bold mb-1'>{item.Name}</p>
              <p className='text-muted mb-0'>{item.Email}</p>
            </div>
          </div>
        </td>
        <td>{item.Addressline1}</td>
        <td>{item.Addressline2}</td>
        <td>{item.City}</td>
        <td>{item.State}</td>
        <td>{item.Pincode}</td>
        <td>{item.Country}</td>
        <td>
          <div className='btn-group' color='link' rounded size='md'>
            
           <MDBBtn className='btn btn-danger' onClick={()=>deleteclient(item._id)}>deleted</MDBBtn> 
           <MDBBtn className='btn btn-success'><Link to={`/Updatecustomer/${item._id}`} style={{textDecoration:"none",color:"white"}}>updated</Link></MDBBtn> 
            
            
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

export default Customer