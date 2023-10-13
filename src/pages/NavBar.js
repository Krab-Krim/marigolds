import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import {NavLink} from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav variant="pills" className="navBarContainer">
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/services">Услуги</NavLink>
            <NavLink to="/price">Прайс</NavLink>
            <NavLink to="/portfolio">Портфолио</NavLink>
            <NavLink to="/contact">Контакты</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;