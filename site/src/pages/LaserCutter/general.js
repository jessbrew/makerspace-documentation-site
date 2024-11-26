import '../../css/laser_cutter/laser_cutter.css'
import '../../css/laser_cutter/getting_started.css'
import Image from 'react-bootstrap/Image';

export default function General() {
    return (
        <div class="general">
            <Steps/>
        </div>
    );
}

function Steps() {
    return (
        <div>

            <h1>General</h1>
            <ol>
                {/* 1 */}
                <li><em><b><u>Talk to professor Brewster about getting trained on the use of the laser cutter, and set up a date that works</u></b></em></li>
                
                {/* 2 */}
                <li>Sign into the computer next to the laser cutter and open Adobe Illustrator file</li>
                <ul>
                    <li>Make a blank file with the dimensions of 24" by 18"</li>
                    <li>For everything that you want the laser to cut all the way through, use a pure red <em>(rgb(255, 0, 0))</em> line that is 0.072px</li>
                    <li>Everything else other than 0.072px red line will be engraved. Darker black shapes will be engraved deeper than lighter gray color shapes</li>
                </ul>

                {/* 3 */}
                <li>Once you have the file you want to engrave/cut open, hit <b>control P</b>, which will bring up a print menu</li>
                <ul>
                    <li><em>VLS4.60/75</em> is the name of the laser cutter, so it should be the printer selected</li>
                    <li>Click the <em>"Setup"</em> button in the lower left corner, then click the <em>"Preferences"</em> button</li>
                </ul>

                {/* 4 */}
                <li>Enter information on the material to be cut</li>
                <ul>
                    <li>Select the material in the left text field (e.g., soft wood)</li>
                    <li>Enter the material thickness in the lower left-hand corner</li>
                    <ul>
                        <li>Use the calipers located in a blue box on a shelf to the right to measure the thickness</li>
                    </ul>
                    <li>The fixture type should be set to <em>"None"</em> and not <em>"Rotary"</em> (unless you are using the rotary)</li>
                    <li>After entering this info, click the <em>"Apply"</em> button and then the <em>"Ok"</em> button, then click <em>"Print"</em> x2</li>
                </ul>

                {/* 5 */}
                <li>Open the laser cutter lid and place material inside (keeping the lid open)</li>

                {/* 6 */}
                <li>Adjust the height of the bed of the laser cutter using the focus tool</li>
                <ul>
                    <li>Use the arrow buttons on the laser cutter to move it up and down</li>
                    <li>Put the focus tool back in its spot, making sure that it sits flush</li>
                </ul>

                {/* 7 */}
                <li>Open the UCP app & position image</li>
                <ul>
                    <li>Clicking anywhere moves the laser to that spot, so you can see where the image lines up on the material</li>
                    <li>Make sure that the image isn't going off any edges of the material, and move it around if so</li>
                    <ul>
                        <li>One trick is to click around to put the laser in a good spot for the top corner of the image to be on the material, then use the "to pointer" button to move the image there</li>
                    </ul>
                </ul>

                {/* 8 */}
                <li>Close the lid & click play to start cutting</li>

                {/* 9 */}
                <li>When done using the laser cutter, close the lid and turn it off</li>
                <ul>
                    <li>Either hold the button on the laser cutter, or click the power button in UCP</li>
                </ul>
            </ol>
        </div>
    );
}
