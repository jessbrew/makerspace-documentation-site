import React from "react";
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap"
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Safety3D from "./pages/3dPrinting/safety";
import Maintenance3D from "./pages/3dPrinting/maintenance";
import Software3D from "./pages/3dPrinting/software";
import LaserGeneral from "./pages/LaserCutter/general";
import LaserMaintenance from "./pages/LaserCutter/maintenance";
import LaserSafety from "./pages/LaserCutter/safety";
import Footer from "./components/footer"
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.css'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/3dsoftware" element={<Software3D/>}/>
          <Route path="/3dmaintenance" element={<Maintenance3D/>}/>
          <Route path="/3dsafety" element={<Safety3D/>}/>
          <Route path="/lasergeneral" element={<LaserGeneral/>}/>
          <Route path="/lasermaintenance" element={<LaserMaintenance/>}/>
          <Route path="/lasersafety" element={<LaserSafety/>}/>
        </Routes>
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/home">Makerspace Documentation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <NavDropdown title='3D Printing'>
              <NavDropdown.Item as={Link} to="/3dsoftware">Software Setup</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/3dmaintenance">Printer Maintenance</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/3dsafety">Safety</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Laser Cutter">
              <NavDropdown.Item as={Link} to="/lasergeneral">Getting Started</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lasermaintenance">Maintenance</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lasersafety">Safety</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Footer></Footer>
  </BrowserRouter>

    </>
  );
}
