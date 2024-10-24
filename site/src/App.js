import React from "react";
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap"
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Saftey from "./pages/3dPrinting/safety";
import Maintenance from "./pages/3dPrinting/maintenance";
import Software from "./pages/3dPrinting/software";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/software" element={<Software/>}/>
          <Route path="/maintenance" element={<Maintenance/>}/>
          <Route path="/safety" element={<Saftey/>}/>
        </Routes>
    <Navbar fixed="top" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home">Makerspace Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <NavDropdown title='3D Printing'>
              <NavDropdown.Item as={Link} to="/software">Software Setup</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/maintenance">Printer Maintenance</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/safety">Saftey</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Lazer Cutter">
              <NavDropdown.Item as={Link} to="/">Getting Started</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">Maintenance</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">Saftey</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </BrowserRouter>

    </>
  );
}
