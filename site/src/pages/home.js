import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link, Routes, Route } from 'react-router-dom';
import LaserGeneral from "../pages/LaserCutter/general";
import Software3D from '../pages/3dPrinting/software';

import 'bootstrap/dist/css/bootstrap.min.css'

export default function home() {
    return (
        <>
        <Routes>
        <Route path="/lasergeneral" element={<LaserGeneral/>}/>
        <Route path="/3dsoftware" element={<Software3D/>}/>
        </Routes>

        <Container>
            <Row className="p-2">
                <Col className="caresol mb-3 mt-3">
                    <h1 className="display-5 text-center">for the caresol</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                <div className="p-2">
                    <h1 className="display-5"><b>About the Makerspace</b></h1>
                    <p><b>The Makerspace</b>, added to Generac Hall in 2022, is a collaboration lab designed to encourage group projects across multiple STEM disciplines. The Makerspace includes 3D printers, a laser cutter, and a variety of other tools and supplies for students to use in their pursuit of an innovative, hands-on maker experience.</p>
                    <p><b>As a computer science student</b>, you'll have 24/7 access to the Makerspace and attend your robotics course within this lab.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className="display-5 text-center"><b>Key Items</b></h1>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Card className="card-hover mb-3">
                        <Card.Img variant="top" src="/images/ultimaker.jpg" />
                            <Card.Body>
                                <Card.Title className="text-center mb-0" style={{fontSize: '1.5em'}}><b>3D Printer</b> </Card.Title>
                                <Card.Text></Card.Text>
                                <div className="accordion-content">
                                    <p className="mb-1"><b>Here</b> in the Makerspace we carry the Ultimaker S line printers.</p>
                                    <p className="mb-1"><b>Which</b> are professional-grade Fused Filament Fabrication printers.</p>
                                    <div className="text-end">
                                    <Button as={Link} to="/3dsoftware" variant="secondary">More Info</Button>
                                    </div>
                                </div>
                            </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="card-hover mb-3">
                        <Card.Img variant="top" src="/images/ultimaker.jpg" />
                            <Card.Body>
                            <Card.Title className="text-center" style={{fontSize: '1.5em'}}>Something</Card.Title>
                            <Card.Text></Card.Text>
                                <div className="accordion-content">
                                    <p>.........</p>
                                </div>
                            </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="card-hover mb-3">
                        <Card.Img variant="top" src="/images/ultimaker.jpg" />
                            <Card.Body>
                            <Card.Title className="text-center" style={{fontSize: '1.5em'}}><b>Lazer Cutter</b></Card.Title>
                            <Card.Text></Card.Text>
                                <div className="accordion-content">
                                    <div>
                                    <p className="mb-1"><b>Additional</b> details about the Lazer Cutters -- possibly link</p>
                                    <div className="text-end">
                                    <Button as={Link} to="/lasergeneral" variant="secondary">More info</Button>
                                    </div>
                                    </div>
                                </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

        </>
    )
}