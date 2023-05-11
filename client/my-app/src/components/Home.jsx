import React from 'react'
import "./Home.css"
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
  } from 'mdb-react-ui-kit';

function Home() {
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer>
        <MDBNavbarBrand href='#'>Bookstore</MDBNavbarBrand>
        <MDBCollapse navbar>
          <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
          <MDBNavbarItem>
              <MDBNavbarLink   active aria-current='page' href='/Sidebar' >
                Home
                
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink   active aria-current='page' href='/Login' >
                Login
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink  active aria-current='page' href='/Signup'>
                Signup
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )
}

export default Home