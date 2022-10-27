import './pageStyles.scss';
import { Card } from '../components/card';
import cym1 from '../assets/cym.png';
import github from '../assets/icons/github.svg';

export default function Cultivate() {
    return (
        <section>
            <p>A multi-page website showing upcoming events, full descriptions of regular classes, and more info about the style and teacher. Built using Angular to easily repeat classes over time, only needing to add dates to existing classes once they are confirmed. Integrates with Calendly to allow users to book classes from within the site.</p>
            <ul className="project-details">
                <li>HTML | SCSS | Angular / Typescript</li>
                <li>
                    <a href="https://www.cultivateyogamke.com" target="_blank">Website</a>
                </li>
                <li>
                    <img src={github} />&nbsp;
                    <a href="https://github.com/brkingsbury/CYM" target="_blank">Github</a>
                </li>
            </ul>
            <Card img={cym1} />
        </section>
    )
}