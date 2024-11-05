import React from "react";
import { Container, Image, Row, Col, Button } from 'react-bootstrap';
import { AiOutlineTrademark } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function softwaresetup() {
    return (
        <>
        <Container>
            <Row>
                <Col md={6}>
                    <Image src="/images/ultimaker.jpg" fluid style={{ width: '100%' }} />
                </Col>
                <Col md={6}> 
                    <h1 className="display-5" style={{ textAlign: 'center', marginTop: '150px' }}>
                        UltiMaker Cura<AiOutlineTrademark />
                    </h1>
                    <p>UltiMaker Cura is free, easy-to-use 3D printing software trusted by millions of users. Fine-tune your 3D model with 400+ settings for the best slicing and printing results.</p>
                    <Row className="mt-3"> 
                        <Col xs={6} style={{textAlign: 'center'}}> {/* Set each button to take half the width on small screens */}
                            <a href="https://github.com/Ultimaker/Cura/releases/download/5.8.1/UltiMaker-Cura-5.8.1-macos-X64.dmg">
                                <Button className="w-50">Mac OS</Button> 
                            </a>
                        </Col>
                        <Col xs={6} style={{textAlign: 'center'}}> {/* Set each button to take half the width on small screens */}
                            <a href="https://github.com/Ultimaker/Cura/releases/download/5.8.1/UltiMaker-Cura-5.8.1-win64-X64.exe">
                                <Button className="w-50">Windows</Button> 
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    );
}
