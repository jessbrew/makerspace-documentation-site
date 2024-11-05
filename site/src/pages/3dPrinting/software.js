import React from "react";
import { Container, Image, Row, Col, Button } from 'react-bootstrap';
import { AiOutlineTrademark } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';

//Go thru and change all the text align centers to the class {text-center}
export default function softwaresetup() {
    return (
        <>
        <Container>
            <Row>
                <Col md={6}>
                    <Image src="/images/ultimaker.jpg" fluid style={{ width: '100%' }} />
                </Col>
                <Col md={6}> 
                    <h1 className="display-5" style={{ textAlign: 'center', marginTop: '200px' }}>
                        UltiMaker Cura<AiOutlineTrademark />
                    </h1>
                    <p>UltiMaker Cura is free, easy-to-use 3D printing software trusted by millions of users. Fine-tune your 3D model with 400+ settings for the best slicing and printing results.</p>
                    <p className="lead" style={{ textAlign: 'center'}}>Click To Download</p>
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
        <Container>
            <Row>
                <Col>
                <h1 className="display-5" style={{ textAlign: 'center'}}>Setting up the Software</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula dui, venenatis eget tellus et, volutpat faucibus elit. Nam eu finibus dolor, a gravida enim. Nulla at dictum nulla, nec auctor eros. Aliquam tristique facilisis dui, vitae fermentum dolor eleifend sed. Phasellus dignissim augue feugiat, fermentum justo at, dapibus urna. Nam sem quam, sodales nec faucibus nec, sagittis id lectus. Proin in porttitor tellus, nec tincidunt lectus. Maecenas dignissim enim eu egestas accumsan.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <h1 className="display-5" style={{ textAlign: 'center'}}>Understanding the Printer</h1>
                <p>Suspendisse cursus, turpis nec efficitur vestibulum, libero mauris euismod sapien, at facilisis tellus arcu a nulla. Aliquam efficitur mauris feugiat est semper, ut placerat enim pulvinar. Phasellus molestie hendrerit porta. Phasellus nulla nulla, euismod eu ultrices non, interdum ac turpis. Sed eu lacus eu purus consectetur bibendum vitae et nisi. Curabitur convallis eu turpis nec consectetur. Donec scelerisque aliquet imperdiet. Nunc suscipit auctor felis non euismod.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <h1 className="display-5" style={{ textAlign: 'center'}}>Setting up an Account</h1>
                <p>Suspendisse cursus, turpis nec efficitur vestibulum, libero mauris euismod sapien, at facilisis tellus arcu a nulla. Aliquam efficitur mauris feugiat est semper, ut placerat enim pulvinar. Phasellus molestie hendrerit porta. Phasellus nulla nulla, euismod eu ultrices non, interdum ac turpis. Sed eu lacus eu purus consectetur bibendum vitae et nisi. Curabitur convallis eu turpis nec consectetur. Donec scelerisque aliquet imperdiet. Nunc suscipit auctor felis non euismod.</p>
                </Col>
            </Row>


        </Container>
        </>
    );
}
