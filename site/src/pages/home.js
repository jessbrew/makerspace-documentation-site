import React from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { Link, Routes, Route } from 'react-router-dom';
import LaserGeneral from "../pages/LaserCutter/general";
import Software3D from '../pages/3dPrinting/software';

import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
    return (
        <>
        <Routes>
        <Route path="/lasergeneral" element={<LaserGeneral />} />
        <Route path="/3dsoftware" element={<Software3D />} />
        </Routes>

        <Container>
            <Row className="p-2">
                <Col className=" mb-3 mt-0">
                    <Carousel className="caresol p-0">
                        <Carousel.Item >
                            <img
                                className="d-block w-100 h-50"
                                src="/images/maker1.jpeg"
                                alt="First slide"
                             />
                            <Carousel.Caption>
                                    <h3>Robotics Innovation</h3>
                                    <p>Discover the world of robotics with hands-on projects and advanced tools in the Makerspace.</p>
                            </Carousel.Caption>                                                          
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/images/maker2.jpeg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Precision Laser Cutting</h3>
                                <p>Unlock creativity with our professional-grade laser cutters.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/images/maker3.jpeg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Collaboration at its Best</h3>
                                <p>The Makerspace is your hub for teamwork and innovation across disciplines.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/images/maker4.jpeg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Innovative 3D Printing</h3>
                                <p>Explore the cutting-edge technology of 3D printing available in the Makerspace.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
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
                <Col md={6}>
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
                {/* <Col md={4}>
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
                </Col> */}
                <Col md={6}>
                    <Card className="card-hover mb-3">
                        <Card.Img className="cardImg" variant="top" src="/images/lazerPic.png"/>
                        <Card.Body>
                            <Card.Title className="text-center" style={{fontSize: '1.5em'}}><b>Lazer Cutter</b></Card.Title>
                            <Card.Text></Card.Text>
                            <div className="accordion-content">
                                <div>
                                    <p className="mb-1"><b>Here</b> in the Makerspace, we have a Universal Laser Systems cutter.</p>
                                    <p className="mb-1"><b>Our</b> Universal Laser Systems cutter is a professional-grade tool, capable of precise cutting and etching on a variety of materials.</p>
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
