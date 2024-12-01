import React from "react";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import '../../css/3dprinting/3dprinting.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function maintenance() {
    return (
        <>
        <Container>
            <h1 className="display-5 text-center mt-2" > Printer Maintenance</h1>
            <Row>
                <Col md={6}>
                <Accordion className="mb-2 accordhover">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Weekly Tasks</Accordion.Header>
                        <Accordion.Body>
                        <p className="mb-1" style={{fontSize: '1.4em'}}><strong>Vacuum the Main Enclosure:</strong></p>
                        <p>Use the vacuum in the second drawer from the right on the 3D printer island.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Col>

                <Col md={6}>
                    <Accordion className="mb-2 accordhover">
                        <Accordion.Item eventKey="0">
                        <Accordion.Header>Monthly Tasks</Accordion.Header>
                        <Accordion.Body>
                                <p className="mb-2" style={{fontSize: '1.4em'}}><strong>Clean the Printer:</strong></p>
                                <p>Vacuum the enclosure.</p>
                                <p>Wipe the build plate with damp paper towels, then use an alcohol pad to remove any oil residue.</p>
                                <p>Clean any fingerprints on the printer glass door with another alcohol pad.</p>
                                <p className="mb-2" style={{fontSize: '1.4em'}}><strong>Lubricate X, Y Axles, and Shafts:</strong></p>
                                <p>Ensure the print heads are cool. Use the oil bottle in the top left drawer to apply a drop to each shaft and axle.</p>
                                <p>Move the printer head to distribute oil evenly.</p>
                                <p className="mb-2" style={{fontSize: '1.4em'}}><strong>Lubricate Z Shafts and Screw:</strong></p>
                                <p>Get the grease from the top left drawer.</p>
                                <p>On the settings screen, navigate to Build Plate and Move Build Plate.</p>
                                <p>Apply oil to the Z shafts and grease to the Z screw. Raise and lower the build plate to spread the lubricant.</p>
                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
            <Row>
            <Col md={6}>
                <Accordion className="mb-2 accordhover">
                    <Accordion.Item eventKey="0">
                    <Accordion.Header >Yearly Tasks</Accordion.Header>
                        <Accordion.Body>
                                <p className="mb-2" style={{fontSize: '1.4em'}}><strong>Check Bowden Tubes:</strong></p>
                                <p>Inspect for excessive movement or wear. If issues are found, contact Prof. Brewster for replacement.</p>
                                <p className="mb-2" style={{fontSize: '1.4em'}}><strong>Lubricate Feed Gear:</strong></p>
                                <p>Unload material, disconnect the Bowden tube, and lubricate as necessary.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Col>
                <Col md={6} className="mb-2">
                    <Accordion className="accordhover">
                        <Accordion.Item eventKey="0">
                        <Accordion.Header>Special Tasks</Accordion.Header>
                        <Accordion.Body>
                                <p className="mb-2" style={{fontSize: '1.4em'}}><strong>Ultimaker Air Filter:</strong></p>
                                <p>Air filter needs to be replaced every 1500 hours</p>
                                <p className="mb-2" style={{fontSize: '1.4em'}}><strong>Pulley Adjustment:</strong></p>
                                <p>Power off the printer and open the glass door.</p>
                                <p>Adjust the axle by loosening the securing screws, realigning it to the proper position, and tightening it again.</p>
                                <p>Ensure the print head moves smoothly along the realigned axle.</p>
                                <p className="mb-2" style={{fontSize: '1.4em'}}><strong> Belt Tension Adjustment:</strong></p>
                                <p>Access the back of the printer where the belt screws are located.</p>
                                <p>Loosen the belt screws slightly.</p>
                                <p>Press down on the motor while keeping the belt taut, then retighten the screws in a cross pattern.</p>
                                <p>Pluck the belts to check for sound; a tight belt should produce a slight, audible sound when plucked.</p>
                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>



        <div className="p-4">
            <h1 className="text-center"><strong>Why is Maintenance Important?</strong></h1>
            <p><b>Printer maintenance</b> is essential to ensure consistent print quality, prolong the printer’s lifespan, and prevent costly repairs. Regular maintenance helps avoid issues such as clogged nozzles, uneven extrusion, or bed adhesion problems, which can compromise the accuracy and reliability of your prints. Cleaning the print head, lubricating the axes, and checking for firmware updates ensure that your printer operates smoothly and efficiently. Moreover, proper upkeep reduces the risk of unexpected downtime, keeping your projects on schedule. By dedicating time to maintenance, you maximize the performance and value of your Ultimaker printer.</p>
        </div>
        </>
    )
}