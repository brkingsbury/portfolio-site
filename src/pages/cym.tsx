import { Card } from '../components/card';
import Status from '../components/status/status';
import cym1 from '../assets/cym_1.png';
import cym2 from '../assets/cym_2.png';
import './pageStyles.scss';


export default function Cultivate() {
    return (
        <section>
            <div className='info'>
                <div className='info-links'>
                    <a href="https://github.com/brkingsbury/CYM" target="_blank">Github</a>
                    <a href="https://www.cultivateyogamke.com" target="_blank">Live Site</a>
                </div>
                <p>HTML | SCSS | Angular / Typescript</p>
                <Status status='active' />
            </div>
            <p className='description'>A multi-page website showing upcoming events, full descriptions of regular classes, and more info about the style and teacher. Built using Angular to easily repeat classes over time, only needing to add dates to existing classes once they are confirmed. Integrates with Calendly to allow users to book classes from within the site.</p>
           
            <Card img={cym1} />
            <Card img={cym2} />
        </section>
    )
}