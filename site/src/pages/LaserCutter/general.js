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
        <ol>
            <li>
                Sign-in to the desktop located next to the Laser cutter, just like any other school computer on campus, and locate the Adobe illustrator file on your profile. An easy way to find it is to hit the windows key and start typing out the name
            </li>
            <li>
                Create a login by clicking the blue create account link in the middle of the page
            </li>
            <li>
                Next fill out the first page of the create account screen. I would recommend using your school email for this. After that fill out page two, don't feel like you have to give them a real birthdate
            </li>
            <Image src="images/laser_cutter/getting_started/createAccount1.jpg"></Image>
            <Image src="images/laser_cutter/getting_started/createAccount2.jpg"></Image>
            <li>
                Once in Illustrator, start a new window set to the custom size of 24"x18". Open the file that you wish to etch or cut with the laser
            </li>
            <ul>
                <li>
                    If the desire is to etch something the color of the outline can be any color except for red. If you want to cut instead of etch use red outlines
                </li>
                <li>
                    When cutting the width of the red outline must be 0.0001" or 0.0072 px in width
                </li>
                <li>
                    When etching the laser cutter will cut deeper the darker the internal fill of an item is, and shallower for lighter internal fill
                </li>
                <Image src="images/laser_cutter/getting_started/Illustrator1.jpg"></Image>
                <Image src="images/laser_cutter/getting_started/Illustrator2.jpg"></Image>
                <Image src="images/laser_cutter/getting_started/Illustrator3.jpg"></Image>
                <li>
                    If the basic blank screen on Illustrator doesn't have the grid shown like this example does, you can go to the top menu, click the "view" dropdown menu. Scroll down towards the bottom where it says "Show Grid"
                </li>
                <Image src="images/laser_cutter/getting_started/Showgrid.jpg"></Image>
            </ul>
            <li>
                Once you have achieved the desired object to etch or cut out, hit control+p to bring up the print menu and send the print to the laser cutter "VLS4.60/75" is the name of the laser cutter. Click the setup button in the lower left corner of the pop-up.
            </li>
            <Image src="images/laser_cutter/getting_started/PrintSetup.jpg"></Image>
            <ul>
                <li>
                    This brings up a Windows pop-up that you click the preferences button
                </li>
            </ul>
            <Image src="images/laser_cutter/getting_started/PrintSetup2.jpg"></Image>
            <ul>
                <li>
                    The next screen is the laser cutter setup screen. Select the material in the left text field (there are many options, take some time to see them all), and enter the material thickness in the lower left-hand corner. To check the material thickness there is a caliper located on the shelf in a blue box. Once you have selected the material and entered the thickness click the "apply" button and then the "Ok" button. Next click the "print" button on the two other windows
                </li>
            </ul>
            <Image src="images/laser_cutter/getting_started/MaterialSelection.jpg"></Image>
            <li>
                Next hit the windows key and type in "UCP. open the program that comes up and it will show how your "printed" object looks for the laser cutter itself
            </li>
            <Image src="images/laser_cutter/getting_started/FindUCP.jpg"></Image>
            <Image src="images/laser_cutter/getting_started/UCPBasicScreen.jpg"></Image>
            <li>
                From here you will utilize the big box on the right to align the image/s that you are going to cut/etch to where you want them on the material you will be using. See images below for step by step picture guides
            </li>
            <ul>
                <li>
                    First the basics of the UCP right hand column. First we have the red software power button for the laser cutter in the upper right corner. Next the large green button you see is the start button, for when you have a print fully mocked up and ready to print. Next you have the pause button to halt the printer if there is an issue(print will restart from the beginning, not from where it was paused). Finally there are the direction buttons to control the cutting head and the bed height
                </li>
                <Image src="images/laser_cutter/getting_started/Ucprightcolumn1.jpg"></Image>
                <li>
                    Next we will discuss the lower bars of the right column. First there is the "Home xy" and "Home z" buttons. Those are used to send the cutting head and internal table back to their home levels
                </li>
                <Image src="images/laser_cutter/getting_started/UCPTab1.jpg"></Image>
                <Image src="images/laser_cutter/getting_started/UCPTab2.jpg"></Image>
                <Image src="images/laser_cutter/getting_started/UCPTab3.jpg"></Image>
                <Image src="images/laser_cutter/getting_started/UCPTab4.jpg"></Image>
            </ul>
        </ol>
    );
}