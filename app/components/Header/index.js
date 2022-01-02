import React, { Component } from "react";
import Img from './Img';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'
import facebookIcon from './images/facebook.png'
import twitterIcon from './images/twitter.svg'
import glanceIcon from './images/glance.svg'
import githubIcon from './images/github.svg'
import logo from './images/penrose.svg'

import './styles/styles.css'

class Header extends Component {

  componentDidMount() {
    console.log("vivek did mount");
  }

  componentWillUnmount() {
    console.log("vivek will unmount");
  }

  render() { 
    return (
      <div className="justify-content-md-center">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='px-5'>
          <Navbar.Brand as={Link} to="/" className="mx-4" >
            <img src={logo} className="Header-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link as={Link} to="projects" className="mx-4">PROJECTS</Nav.Link>
              <Nav.Link as={Link} to="comics" className="mx-4">COMICS</Nav.Link>
              <Nav.Link as={Link} to="blog" className="mx-4">BLOG</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav className='flex-row'>
              <Nav.Link eventKey={4} href="https://github.com/Viv3k/" target="_blank" className='py-0 social-icon'>
                              <Img src={githubIcon} alt="githubIcon" />
              </Nav.Link>
              <Nav.Link eventKey={3} href="https://www.facebook.com/VivekDarsanapu" target="_blank" className='py-0 social-icon'>
                <Img src={facebookIcon} alt="facebookIcon" />
              </Nav.Link>
              <Nav.Link eventKey={2} href="https://twitter.com/Vivek_6055" target="_blank" className='py-0 social-icon'>
                <Img src={twitterIcon} alt="twitterIcon"/>
              </Nav.Link>
              <Nav.Link eventKey={1} href="https://glance.com" target="_blank" className='px-1 py-0 h-50'>
                <Img src={glanceIcon} className='py-1' alt="glanceIcon"/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          <br />
        {/* <NavBar>

          <Link to="/"> 
            <Button variant="outline-dark" >Home</Button>
          </Link>

          <Link to="/features"> 
            <Button variant="outline-dark">features</Button>
          </Link>
        </NavBar> */}
      </div>
    );
  }
}

export default Header;

