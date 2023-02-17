import { Card } from '../components/card';
import Status from '../components/status/status';
import retro1 from '../assets/retro_1.png';
import './pageStyles.scss';


export default function Retro() {
    return (
        <section>
            <div className='info'>
                <div className='info-links'>
                    <a href="https://github.com/brkingsbury/retro" target="_blank">Github</a>
                    <a href="https://thriving-tartufo-af75bb.netlify.app/" target="_blank">Live Site</a>
                </div>
                <p>HTML | SCSS | React / Typescript</p>
                <Status status='in progress' />
            </div>
            <p className='description'>A site inspired by my first childhood computer - using Macintosh OS 7 which was also my first introduction to design with Kid Pix. I'll occasionally add new features and content. For now, it's best viewed in Chrome on a desktop. Screenshots don't do it justice.</p>
           
            <Card img={retro1} />
        </section>
    )
}