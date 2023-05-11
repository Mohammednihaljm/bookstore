import React, { useEffect, useState } from 'react'
import "./Teammember.css"
import {  MDBBtn, MDBTable, MDBTableHead, MDBTableBody,} from 'mdb-react-ui-kit';
import axios from 'axios';
import { Link } from 'react-router-dom';

  

function Teammember() {
  const [Data, setData] = useState("")

 useEffect(() => {
   const fetch=async(req,res)=>{
    await axios.get("http://localhost:4000/getteam").then(res=>setData(res.data))
   }
 
   fetch() 
     
   
 }, [])

 function deleteteam(_id){
  fetch(`http://localhost:4000/deletteam/${_id}`,{
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
        <th scope='col'>Date of birth</th>
        <th scope='col'>Gender</th>
        <th scope='col'>Description</th>
        <th scope='col'>Role</th>
        <th scope='col'>Phonenumber</th>
        <th scope='col'>Upload profile</th>
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
        <td>{item.Dateofbirth}</td>
        <td>{item.Gender}</td>
        <td>{item.Description}</td>
        <td>{item.Role}</td>
        <td>{item.Phonenumber}</td>
        <td>{item.Uploadprofile}</td>
        <td>
          <div className='btn-group' color='link' rounded size='md'>
            
           <MDBBtn className='btn btn-danger' onClick={()=>deleteteam(item._id)}>deleted</MDBBtn> 
           <MDBBtn className='btn btn-success'><Link to={`/updateteam/${item._id}`} style={{textDecoration:"none",color:"white"}}>updated</Link></MDBBtn> 
            
            
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

export default Teammember