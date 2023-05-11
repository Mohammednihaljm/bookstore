import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Sidebar.css"
function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div className="sidebar">
      <button onClick={handleToggle}>☰</button>
      <div className={`sidebar-content ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to={"Books"} style={{textDecoration:"none",color:"black"}}>Books</Link></li>
          <li><Link to={"AddBooks"} style={{textDecoration:"none",color:"black"}}> Add Book</Link></li>
          <li><Link to={"Client"} style={{textDecoration:"none",color:"black"}}>Client</Link> </li>
          <li><Link to={"AddClient"} style={{textDecoration:"none",color:"black"}}>Add Client</Link></li>
          <li><Link to={"Customer"} style={{textDecoration:"none",color:"black"}}> Customer</Link></li>
          <li><Link to={"Addcustomer"} style={{textDecoration:"none",color:"black"}}>Add customer</Link></li>
          <li><Link to={"Teammember"} style={{textDecoration:"none",color:"black"}}> Teamm member</Link></li>
          <li><Link to={"Addteam"} style={{textDecoration:"none",color:"black"}}> Add Teamm member</Link></li>
          <li><Link to={"Order"} style={{textDecoration:"none",color:"black"}}>Order</Link></li>
          <li><Link to={"Createorder"} style={{textDecoration:"none",color:"black"}}>Create order</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar