import React, { Component } from "react";
import Img from './Img';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import facebookIcon from './images/facebook.png'
import twitterIcon from './images/twitter.svg'
class Header extends Component {

  componentDidMount() {
    console.log("vivek did mount");
  }

  componentWillUnmount() {
    console.log("vivek will unmount");
  }

  render() { 
    return (
      <div>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/" className="mx-5" >Viv3k</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="features" className="mx-4">Features</Nav.Link>
              <Nav.Link href="comics" className="mx-4">Comics</Nav.Link>
              <Nav.Link href="About" className="mx-4">About</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link href="https://www.facebook.com/VivekDarsanapu" target="_blank">
                <Img src={facebookIcon} alt="facebookIcon"/>
              </Nav.Link>
              <Nav.Link eventKey={2} href="https://twitter.com/Vivek_6055" target="_blank">
                <Img src={twitterIcon} alt="twitterIcon"/>
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

