import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import Logo from '../../assets/logomain.png'
export default function Header() {
  return (
    
    <Navbar  expand="lg" className="navbar">
    <img src={Logo} alt="logo" className="logomain" />
    <Form>
        <FormControl type="text" placeholder="Dashboard Search Bar" size="lg"/>
      </Form>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav id="eachnav">
        <Nav.Link href="#anfritao" >Addis Abeba</Nav.Link>
        <Nav.Link href="#salvos">Hawassa</Nav.Link>
        <Nav.Link href="#viagens">Harrer</Nav.Link>
        <Nav.Link href="#msg">Lalibela</Nav.Link>
        <Nav.Link href="#ajuda">Axum</Nav.Link>
        <Nav.Link href="#creditos">Afar Danakil Depression</Nav.Link>
      </Nav>
      <Link to="/new">
            <button className="new">
                Create a New Service Hosting
            </button>
        </Link>
    </Navbar.Collapse>
  </Navbar>
  );
}
