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
                                <th className="text-center">Weekly Tasks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td>
                                <li><strong>Vacuum the Main Enclosure:</strong> Use the vacuum in the second drawer from the right on the 3D printer island.</li>
                            </td>
                        </tbody>
                    </Table>
                </Col>
                <Col md={6}>
                    <Table>
                        <thead>
                            <tr>
                                <th className="text-center">Monthly Tasks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td>
                                <p><strong>Clean the Printer:</strong>
                                <li>Vacuum the enclosure.</li>
                                <li>Wipe the build plate with damp paper towels, then use an alcohol pad to remove any oil residue.</li>
                                <li>Clean any fingerprints on the printer glass door with another alcohol pad.</li>
                                </p>
                                <p><strong>Lubricate X, Y Axles, and Shafts:</strong>
                                <li>Ensure the print heads are cool. Use the oil bottle in the top left drawer to apply a drop to each shaft and axle.</li>
                                <li>Move the printer head to distribute oil evenly.</li>
                                </p>
                                <p><strong>Lubricate Z Shafts and Screw:</strong>
                                <li>Get the grease from the top left drawer.</li>
                                <li>On the settings screen, navigate to Build Plate and Move Build Plate.</li>
                                <li>Apply oil to the Z shafts and grease to the Z screw. Raise and lower the build plate to spread the lubricant.</li>
                                </p>
                            </td>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
            <Col md={6}>
                    <Table>
                        <thead>
                            <tr>
                                <th className="text-center">Yearly Tasks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td>
                                <p><strong>Check Bowden Tubes:</strong>
                                <li>Inspect for excessive movement or wear. If issues are found, contact Prof. Brewster for replacement.</li>
                                <p><strong>Lubricate Feed Gear:</strong>
                                <li>Unload material, disconnect the Bowden tube, and lubricate as necessary.</li>
                                </p>
                                </p>
                            </td>
                        </tbody>
                    </Table>
                </Col>
                <Col md={6}>
                    <Table>
                        <thead>
                            <tr>
                                <th className="text-center">Special Tasks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td>
                                <p><strong>Ultimaker Air Filter:</strong>
                                <li>Air filter needs to be replaced every 1500 hours</li>
                                <p><strong>Pulley Adjustment:</strong>
                                <li>Power off the printer and open the glass door.</li>
                                <li>Adjust the axle by loosening the securing screws, realigning it to the proper position, and tightening it again.</li>
                                <li>Ensure the print head moves smoothly along the realigned axle.</li>
                                <p><strong> Belt Tension Adjustment:</strong>
                                <li>Access the back of the printer where the belt screws are located.</li>
                                <li>Loosen the belt screws slightly.</li>
                                <li>Press down on the motor while keeping the belt taut, then retighten the screws in a cross pattern.</li>
                                <li>Pluck the belts to check for sound; a tight belt should produce a slight, audible sound when plucked.</li>
                                </p>
                                </p>
                                </p>
                            </td>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
        </>
    )
}