import React, { useEffect, useState } from 'react'
import "./Client.css"
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody,} from 'mdb-react-ui-kit';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Client() {
const [Data, setData] = useState("")

useEffect(() => {
  const fetch=async(req,res)=>{
    await axios.get("http://localhost:4000/getclient").then(res=>setData(res.data))
  
  }
  fetch() 
    
  
}, [])

  
function deleteclient(_id){
  fetch(`http://localhost:4000/deleteclient/${_id}`,{
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
        <th scope='col'>Username</th>
        <th scope='col'>Status</th>
        <th scope='col'>Role</th>
        <th scope='col'>Phonenumber</th>
        <th scope='col'>Actions</th>
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
        <td>
          <p className='text-muted mb-0'>{item.Username}</p>
        </td>
        <td>
          <MDBBadge color='success' pill>
            {item.Signedstatus}
          </MDBBadge>
        </td>
        <td>{item.Role}</td>
        <td>{item.Phonenumber}</td>
        <td>
          <div className='btn-group' color='link' rounded size='md'>
            
           <MDBBtn className='btn btn-danger' onClick={()=>deleteclient(item._id)}>deleted</MDBBtn> 
           <MDBBtn className='btn btn-success' ><Link to={`/Updateclient/${item._id}`} style={{textDecoration:"none",color:"white"}}>updated</Link></MDBBtn> 
            
            
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

export default Client