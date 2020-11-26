import React from "react";
import { Nav, Navbar } from "react-bootstrap";
//import { Link } from "react-router-dom";

export const NavigationBar = () => (
  <Navbar bg="grey" expand="lg">
    <Navbar.Brand className=" align-center" href="/">
      Beema Insurance
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link style={{ color: "white" }} to="/about">
            About
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
