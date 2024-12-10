import React from "react";
import { Container, Image, Row, Col, Button, Card } from 'react-bootstrap';
import { AiOutlineTrademark } from "react-icons/ai";
import '../../css/3dprinting/3dprinting.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Go thru and change all the text align centers to the class {text-center}
export default function softwaresetup() {
    return (
        <>
        <Container>
            <Row>
                <Col md={6} className="mb-0">
                    <Image src="/images/ultimaker.jpg"  style={{ width: '100%' }} />
                </Col>
                <Col md={6} className="mt-0"> 
                    <h1 className="display-5 mt-custom" style={{ textAlign: 'center' }}>
                        UltiMaker Cura<AiOutlineTrademark />
                    </h1>
                    <p>UltiMaker Cura is free, easy-to-use 3D printing software trusted by millions of users. Fine-tune your 3D model with 400+ settings for the best slicing and printing results.</p>
                    <p className="lead" style={{ textAlign: 'center'}}>Click To Download</p>
                    <Row className="mt-3 mb-3"> 
                        <Col xs={6} style={{textAlign: 'center'}}> 
                            <a href="https://github.com/Ultimaker/Cura/releases/download/5.8.1/UltiMaker-Cura-5.8.1-macos-X64.dmg">
                                <Button className="button-style">Mac OS</Button> 
                            </a>
                        </Col>
                        <Col xs={6} style={{textAlign: 'center'}}> 
                            <a href="https://github.com/Ultimaker/Cura/releases/download/5.8.1/UltiMaker-Cura-5.8.1-win64-X64.exe">
                                <Button className="button-style">Windows</Button> 
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col>
                <h1 className="display-5 pb-2" style={{ textAlign: 'center', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'}}>Setting up the Software</h1>
                </Col>
            </Row>
        
            <Row className="text-center pb-3">
                <Col md={4} className="mb-3">
                    <Card className="cardHover h-100" style={{ backgroundColor: '#d3d3d3', padding: '20px', height: '255px' }}>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li className="pb-2" style={{fontSize: '1.8em'}}>Sign In to Cura</li>
                        <li className="pb-2" style={{ listStyleType: 'none', textAlign: 'left' }}><strong>Open</strong> Cura and click the "Sign In" button in the top-right corner.</li>
                        <li className="pb-2" style={{ listStyleType: 'none', textAlign: 'left' }}><strong>Sign</strong> in with your Ultimaker account. (Do not click any other options in the pop-up window.)</li>
                    </ul>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
                <Card className="cardHover  h-100" style={{ backgroundColor: '#d3d3d3', padding: '20px', height: '255px' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li className="pb-2" style={{fontSize: '1.8em'}}>Access the Marketplace</li>
                        <li className="pb-2" style={{ listStyleType: 'none', textAlign: 'left' }}><strong>After</strong> signing in, click the "Marketplace" button in the top-right corner of Cura.</li>
                        <li className="pb-2" style={{ listStyleType: 'none', textAlign: 'left' }}><strong>In</strong> the pop-up window, find the "Settings Guide" plugin by Ghostkeeper and click "Install." This plugin provides helpful explanations for settings.</li>

                    </ul>
                </Card>
                </Col>
                <Col md={4} className="mb-3">
                <Card className="cardHover  h-100" style={{ backgroundColor: '#d3d3d3', padding: '20px', height: '255px' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li className="pb-2" style={{fontSize: '1.8em'}}>Add Filament Prices</li>
                        <li className="pb-2" style={{ listStyleType: 'none', textAlign: 'left' }}><strong>Click</strong> the "Settings" button in the upper left corner of Cura and navigate to Extruder 1 Materials {'>'} Manage Materials.</li>
                        <li className="pb-2" style={{ listStyleType: 'none', textAlign: 'left' }}><strong>Refer</strong> to the materials list in the Makerspace to enter the prices. For example, Ultimaker Tough PLA Black is $50 per spool, and PolyTerra is $21 per spool.</li>
                    </ul>
                </Card>
                </Col>
            </Row>                
            <Row>
                <Col>
                <h1 className="display-5 pb-2" style={{ textAlign: 'center', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' }}>Understanding the Printer</h1>
                </Col>
            </Row>
            <Row className="text-center pb-3">
                <Col md={4} className="mb-3">
                <Card className="cardHover h-100" style={{ backgroundColor: '#d3d3d3', padding: '20px', height: '285px'  }}>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li className="pb-2" style={{fontSize: '1.8em'}}>The Ultimaker S3 and S5</li>
                        <li className="pb-2" style={{ listStyleType: 'none', textAlign: 'left' }}><strong>Ultimaker S3:</strong> A smaller cube-shaped printer with a single door that opens to the left and a screen displaying printer status, maintenance info, and print details.                        </li>
                        <li className="pb-2" style={{ listStyleType: 'none', textAlign: 'left' }}><strong>Ultimaker S5:</strong> A taller version with two doors that open outward. It also includes a material station that allows for more color options (to be discussed later).                        </li>
                    </ul>
                </Card>
                </Col>
                <Col md={4} className="mb-3">
                <Card className="cardHover  h-100" style={{ backgroundColor: '#d3d3d3', padding: '20px', height: '285px' }}>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li className="pb-2" style={{fontSize: '1.8em'}}>External Components</li>
                        <li className="pb-2" style={{ listStyleType: 'none', textAlign: 'left' }}><strong>Front panel:</strong>  Both the S3 and S5 have a front screen that displays essential information.</li>
                        <li className="pb-2" style={{ listStyleType: 'none', textAlign: 'left' }}><strong>Material Station (for S5):</strong> A separate station for storing and managing more filament color options.</li>
                    </ul>
                </Card>
                </Col>
                <Col md={4} className="mb-3">
                <Card className="cardHover  h-100" style={{ backgroundColor: '#d3d3d3', padding: '20px', height: '285px' }}>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li className="pb-2" style={{fontSize: '1.8em'}}>Internal Components</li>
                        <li className="pb-2" style={{ listStyleType: 'none', textAlign: 'left' }}><strong>Build Plate: </strong>A heated glass surface where the 3D prints are built. It provides the Z-axis movement.</li>
                        <li className="pb-2" style={{ listStyleType: 'none', textAlign: 'left' }}><strong>Printer Head:</strong> This part receives filament from the feeder boxes and houses two print cores that heat up to extrude filament onto the build plate. It moves along axles to perform X and Y-axis movements.
                        </li>
                    </ul>
                </Card>
                </Col>
            </Row>                

            <Row>
                <Col>
                <h1 className="display-5 pb-2" style={{ textAlign: 'center', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'}}>Setting up an Account</h1>
                </Col>
            </Row>
            <Row className="text-center">
                <Col md={4} className="mb-3">
                <Card className="cardHover  h-100" style={{ backgroundColor: '#d3d3d3', padding: '20px', height: '310px' }}>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li className="pb-2" style={{fontSize: '1.8em'}}>Accessing the 3D Printer</li>
                        <li className="pb-2" style={{ listStyleType: 'none', textAlign: 'left' }}><strong>Contact the Right Person:</strong> Reach out to Professor Brewster (or Dr. Brown if Brewster is unavailable) to be added to the 3D printer network.                        </li>
                        <li className="pb-2" style={{ listStyleType: 'none', textAlign: 'left' }}><strong>Follow the Link:</strong> In the email you receive, click on the provided link to begin creating your Ultimaker account.</li>
                    </ul>
                </Card>
                </Col>
                <Col md={4} className="mb-3">
                <Card className="cardHover h-100" style={{ backgroundColor: '#d3d3d3', padding: '20px', height: '310px' }}>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li className="pb-2" style={{fontSize: '1.8em'}}>Ultimaker Account Setup</li>
                        <li className="pb-2" style={{ listStyleType: 'none', textAlign: 'left' }}><strong>Select the Printer Option:</strong> Choose to create an account for an Ultimaker printer (this option is underlined in red).</li>
                        <li className="pb-2" style={{ listStyleType: 'none', textAlign: 'left' }}><strong>Enter Your Information:</strong> Use the email from the link and create a memorable password.</li>
                        <li className="pb-2" style={{ listStyleType: 'none', textAlign: 'left' }}><strong>Select Printing Preferences:</strong> Check the top 3 boxes for your 3D printing needs, but note that these don't impact printer usage.</li>
                    </ul>
                </Card>
                </Col>
                <Col md={4} className="mb-3">
                <Card className="cardHover h-100" style={{ backgroundColor: '#d3d3d3', padding: '20px', height: '310px' }}>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li className="pb-2" style={{fontSize: '1.8em'}}>Verifying Your Account</li>
                        <li className="pb-2" style={{ listStyleType: 'none', textAlign: 'left' }}><strong>Email Verification:</strong> Go to your inbox and click the link to verify your account.</li>
                        <li className="pb-2" style={{ listStyleType: 'none', textAlign: 'left' }}><strong>Activate Your Account:</strong> Click the “Activate Account” button to complete the process.</li>
                        <li className="pb-2" style={{ listStyleType: 'none', textAlign: 'left' }}><strong>Sign In:</strong> After activation, sign in to your Ultimaker Digital Factory account, and you’ll be directed to the WLC workspace homepage.
                        </li>
                    </ul>
                </Card>
                </Col>
            </Row>                
        </Container>
        </>
    );
}
