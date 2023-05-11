import React from "react"
import {BrowserRouter as Router,Routes,Route}from "react-router-dom"
import Home from "./components/Home";
import Loginform from "./components/Loginform";
import Sidebar from "./components/Sidebar";
import Signupform from "./components/Signupform";
import AddBooks from "./pages/AddBooks";
import Books from "./pages/Books";
import UpdateBooks from "./pages/UpdateBooks";
import Home1 from "./pages/Home1";
import Client from "./pages/Client";
import AddClient from "./pages/AddClient";
import Updateclient from "./pages/Updateclient";
import Customer from "./pages/Customer";
import Addcustomer from "./pages/Addcustomer";
import Updatecustomer from "./pages/Updatecustomer";
import Teammember from "./pages/Teammember";
import Addteam from "./pages/Addteam";
import Updateteam from "./pages/Updateteam";
import Createorder from "./pages/Createorder";
import Order from "./pages/Order";

function App() {
  return (
    <Router>
       <Home/>
    <Routes>
      <Route path="/" element={<Home1/>}/>
      <Route path="/Login" element={<Loginform/>}/>
      <Route path="/Signup" element={<Signupform/>}/>
      <Route path="/Books" element={<Books/>}/>
      <Route path="/AddBooks" element={<AddBooks/>}/>
      <Route path="/Update/:id" element={<UpdateBooks/>}/>
      <Route path="/Client" element={<Client/>}/>
      <Route path="/AddClient" element={<AddClient/>}/>
      <Route path="/Updateclient/:id" element={<Updateclient/>}/>
      <Route path="/Customer" element={<Customer/>}/>
      <Route path="/Addcustomer" element={<Addcustomer/>}/>
      <Route path="/Updatecustomer/:id" element={<Updatecustomer/>}/>
      <Route path="/Teammember" element={<Teammember/>}/>
      <Route path="/Addteam" element={<Addteam/>}/>
      <Route path="/Updateteam/:id" element={<Updateteam/>}/>
      <Route path="/Createorder" element={<Createorder/>}/>
      <Route path="/Order" element={<Order/>}/>

     

    </Routes>
    <Sidebar/>
    

    

    
    
   
    </Router>
  )
}

export default App;
