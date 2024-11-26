import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function home() {
    return (
        <>
        <Container>
            <Row className="p-2">
                <Col className="caresol mb-3 mt-3">
                    <h1 className="display-5 text-center">for the caresol</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className="display-5">About the Makerspace</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero quam, finibus ac venenatis venenatis, placerat sit amet libero. Integer feugiat semper fringilla. In aliquam mauris luctus, lacinia sem mattis, accumsan lectus. Nullam ut lectus dolor. Duis eleifend ultrices tellus a suscipit. Sed lacinia eget sem sed mattis. Ut ultrices, mi sit amet scelerisque viverra, urna urna fringilla nibh, at efficitur nisl sapien nec orci. Integer id ultricies massa. Nullam sit amet nibh ac lectus auctor mattis. Fusce ultrices vitae est in imperdiet.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className="display-5 text-center">Key Items</h1>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Card className="card-hover mb-3">
                        <Card.Img variant="top" src="/images/ultimaker.jpg" />
                            <Card.Body>
                                <Card.Title className="text-center" style={{fontSize: '1.5em'}}>3D Printer</Card.Title>
                                <Card.Text></Card.Text>
                                <div className="accordion-content">
                                    <p>Here in the Makerspace we carry the Ultimaker S line printers. </p>
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
                            <Card.Title className="text-center" style={{fontSize: '1.5em'}}>Lazer Cutter</Card.Title>
                            <Card.Text></Card.Text>
                                <div className="accordion-content">
                                    <p>Additional details about the Lazer Cutters -- possibly link</p>
                                </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}