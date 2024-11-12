import '../../css/laser_cutter/laser_cutter.css'
import '../../css/laser_cutter/safety.css'
import Image from 'react-bootstrap/Image';

export default function Safety() {
    return (
        <div class="safety">
            <Basic/>
            <Machine/>
        </div>
        );
}

function Basic() {
    return (
        <div class="basic_guidelines">
            <h1>Basic Guidelines</h1>
            <ul>
                <li>
                    This is a powerful laser and it can cause fires to happen, <b>do not freak out if there is a fire inside the machine.</b> Calmly and quickly open the lid of the cutter slightly and then shut it again immediately. This will stop the laser from cutting anymore, and the air filtration system will still be active and extinguish the flames. If the flames are not extinguished by the air filtration system, there are some gloves that can be used to pat out a small fire in the drawer labeled Safety located to the right of the laser cutter. Finally if the fire is too big to pat out, there are also fire extinguisher bottles in the same drawer as the gloves. These are to be used as a last resort. The use of them requires a special cleanup of the laser cutter by an outside source.
                </li>
                <li>
                    This is a <em>laser</em> cutter, meaning it will be bright while it is doing it's work. <em><b>DO NOT</b></em> look directly at the cutting head for too long to avoid eye damage.
                </li>
                <li>
                    Material will be warm/hot when it is pulled out of the laser cutter. Be cautious as to not burn yourself.
                </li>
            </ul>
        </div>
    );
}

function Machine() {
    return (
        <div class="machine_safety">
            <h1>Machine Safety Guidelines</h1>
            <ul>
                <li>
                    This is an expensive machine, treat it with care so it can be used for many more years.
                </li>
                <li>
                    When opening the lid use the inset handle so the lid and hinges do not get warped.
                </li>
                <li>
                    Ensure the Z-axis surface is low enough for the cutter head to cross over your material without touching when you are setting your starting points and Z height.
                </li>
                <li>
                    When setting the Z height, gradually raise the material surface to avoid damaging the cutter head.
                </li>
            </ul>
        </div>
    );
}

