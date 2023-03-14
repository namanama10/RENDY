import React from 'react'
import {Link} from 'react-router-dom'
import LogoWeb from '../images/rendy_4.JPG'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarRendy = () => {
  return (
    <>
    <Navbar bg="white" expand="lg">
      <Container>
        <Link to="/"><img src={LogoWeb} alt='' className='imgLogo'/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto h5">
            <Link to="/" className="TextNavbar">Home</Link>
            <Link to="/TentangKami" className="TextNavbar">Tentang Kami</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarRendy