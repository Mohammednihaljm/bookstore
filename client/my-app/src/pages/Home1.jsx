import React from 'react'
import "./Home1.css"
// import { Link }from "react-router-dom"

function Home1() {
  return (
    <div className='Home-page bg-dark text-white container-fluid'>
    <div className='row'>
      <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column" style={{height:"91.5vh"}}>
        <h2 style={{fontSize:"70px"}}>Book store for you</h2>
        <p>Today a reader,tommorrow a leader</p>
        {/* <button className='viewBook  bg-light' type='submit' ><Link to="Books">Books</Link></button>
        <button className='viewBook  bg-light'>View Books</button>
        <button className='viewBook  bg-light'>Add Books</button> */}
      </div>
      <div className="col-lg-6  d-flex justify-content-center align-items-center flex-column" style={{height:"91.5vh"}}>
        <img className='img-fluid homeing' src="https://i.pinimg.com/736x/02/85/5e/02855eeeb8f451783151cb1a5613a1fc.jpg" alt="/" />
      </div>
    </div>
    </div>
  )
}

export default Home1