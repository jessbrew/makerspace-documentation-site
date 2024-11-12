import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


export default function maintenance() {
    return (
        <>
        <Container>
            <h1 className="display-5 text-center" > Printer Maintenance</h1>
            <Row>
                <Col md={6} style={{marginBottom: '100px'}} >
                    <Table>
                        <thead>
                            <tr>
                                {/* <th>#</th> */}
                                <th className="text-center">Weekly Tasks</th>
                                {/* <th>Last Name</th>
                                <th>Username</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <td><li>You have to wash the gears</li></td>
                        </tbody>
                    </Table>
                </Col>
                <Col md={6}>
                    <Table>
                        <thead>
                            <tr>
                                {/* <th>#</th> */}
                                <th className="text-center">Monthly Tasks</th>
                                {/* <th>Last Name</th>
                                <th>Username</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <td><li>You have to wash the gears</li></td>
                        </tbody>

                    </Table>
                </Col>
            </Row>
            <Row>
            <Col md={6} >
                    <Table>
                        <thead>
                            <tr>
                                {/* <th>#</th> */}
                                <th className="text-center">Yearly Tasks</th>
                                {/* <th>Last Name</th>
                                <th>Username</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <td><li>You have to wash the gears</li></td>
                        </tbody>

                    </Table>
                </Col>
                <Col md={6}>
                    <Table>
                        <thead>
                            <tr>
                                {/* <th>#</th> */}
                                <th className="text-center">Special Tasks</th>
                                {/* <th>Last Name</th>
                                <th>Username</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <td><li>You have to wash the gears</li></td>
                        </tbody>
                    </Table>
                </Col>


            </Row>
        </Container>
        </>
    )
}