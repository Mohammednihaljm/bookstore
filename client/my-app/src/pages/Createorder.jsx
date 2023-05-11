import axios from 'axios'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBInput } from 'mdb-react-ui-kit'
import React, { useState } from 'react'

function Createorder() {
  
    const [Firstname, setFirstname] = useState()
    const [Lastname, setLastname] = useState()
    const [Orderid, setOrderid] = useState()
    const [Product, setProduct] = useState()
    const [Noofproduct, setNoofproduct] = useState(1)
    const [Date, setDate] = useState()
    const [Street, setStreet] = useState()
    const [Additionalinformation, setAdditionalinformation] = useState()
    const [Zipcode, setZipcode] = useState()
    const [Place, setPlace] = useState()
    const [Country, setCountry] = useState()
    const [Phonenumber, setPhonenumber] = useState()
    const [Email, setEmail] = useState()
    
    
    const handlesubmit=()=>{
        try {
            const userdetails = {Firstname,Lastname,Orderid,Product,Noofproduct,Date,Street,Additionalinformation,Zipcode,Place,Country,Phonenumber,Email}
            const respoce   =axios.post('http://localhost:4000/Order',userdetails).then(res=>res.data).then(data=>console.log(data))
    
        } catch (error) {
            
        }
    }
    
    
      return (
        <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}> 
            <MDBCard style={{width:'45%',textAlign:'center'}}>
            <MDBCardTitle style={{fontSize:'40px'}}>Order details </MDBCardTitle>
        <MDBCardBody >
          
    
    
          <MDBCardTitle style={{margin:'10px'}}>First Name</MDBCardTitle>
          <MDBInput style={{margin:'20px',width:'35%'}} name='firstname'  id='form1' type='text'  onChange={(e)=>setFirstname(e.target.value)}/>
         
           <MDBCardTitle style={{margin:'10px'}}>Last Name</MDBCardTitle>
          <MDBInput   id='form1' type='text' name='lastname' onChange={(e)=>setLastname(e.target.value)}/>
          
          <MDBCardTitle style={{margin:'10px'}}>Order Id</MDBCardTitle>
          <MDBInput   id='form1' type='text'name='orderid' onChange={(e)=>setOrderid(e.target.value)}/>
    
          <MDBCardTitle style={{margin:'10px'}}>Product</MDBCardTitle>
          <MDBInput   id='form1' type='text'name='product' onChange={(e)=>setProduct(e.target.value)}/>
    
          <MDBCardTitle style={{margin:'10px'}}>No of products
    
            </MDBCardTitle> 
           <div className='btn-group' >
           <button   style={{borderRadius:'10px',padding:'10px',width:'50px',margin:'10px'}} onClick={()=>setNoofproduct(Noofproduct+1)} onChange={(e)=>setProduct(e.target.value)}>+</button>
           <button  style={{borderRadius:'10px',padding:'10px',width:'50px'}} onClick={()=>setNoofproduct(Noofproduct-1)} onChange={(e)=>setProduct(e.target.value)}>-</button>
          <p>{Noofproduct}</p>
           </div>
          <div style={{margin:'10px'}}>
            
          <MDBCardTitle style={{margin:'10px'}}>Date
    
    </MDBCardTitle> 
          <MDBInput  name='dob'  type='date'  id='form1' onChange={(e)=>setDate(e.target.value)} />
          </div>
          
          
        </MDBCardBody>
        
      </MDBCard >
    
    
      <MDBCard  style={{width:'35%',textAlign:'center',backgroundColor:'darkblue',color:'white'}}>
        <MDBCardBody >
          <MDBCardTitle style={{fontSize:'40px',margin:'20px'}}>Contact Details</MDBCardTitle>
          
          <MDBCardTitle style={{margin:'10px'}}>Street +Ntr</MDBCardTitle>
          <MDBInput style={{margin:'10px',width:'35%'}} name='street' id='form1' type='text' onChange={(e)=>setStreet(e.target.value)} />
    
      <MDBCardTitle style={{margin:'10px'}}>Additional Information</MDBCardTitle>
          <MDBInput style={{margin:'10px',width:'35%'}} name='additionalinfo' id='form1' type='text' onChange={(e)=>setAdditionalinformation(e.target.value)} />
    
          <MDBCardTitle style={{margin:'10px'}}>Zip code</MDBCardTitle>
          <MDBInput style={{margin:'10px',width:'35%'}} name='zipcode' size='sm' id='form1' type='text' onChange={(e)=>setZipcode(e.target.value)}/>
          <MDBCardTitle style={{margin:'10px'}}>Place</MDBCardTitle>
          <MDBInput style={{margin:'10px',width:'35%'}} size='sm' name='place' id='form1' type='text' onChange={(e)=>setPlace(e.target.value)}/>
          <MDBCardTitle style={{margin:'10px'}}>Country</MDBCardTitle>
          <MDBInput style={{margin:'10px',width:'35%'}} size='lg' name='country' id='form1' type='text' onChange={(e)=>setCountry(e.target.value)}/>
          <MDBCardTitle style={{margin:'10px'}}>Phone Number</MDBCardTitle>
          <MDBInput style={{margin:'10px',width:'25%'}} size='lg' name='phonenumber' id='form1' type='text' onChange={(e)=>setPhonenumber(e.target.value)}/>
          <MDBCardTitle style={{margin:'10px'}}>Email</MDBCardTitle>
          <MDBInput style={{margin:'10px'}} size='lg' name='email' id='form1' type='email' onChange={(e)=>setEmail(e.target.value)} />
          <MDBCardTitle style={{margin:'30px'}}>I do accept the terms and conditions of your site</MDBCardTitle>
         <input type='checkbox' style={{width:'60%',height:'3%'}}></input>
           
        </MDBCardBody>
        <div className='btn btn-group'>
        <MDBBtn onClick={handlesubmit} style={{margin:'40px',fontWeight:'bold',fontSize:'15px'}}>Submit</MDBBtn>  
        </div>
      </MDBCard>
      </div>
    ) 
  
}

export default Createorder