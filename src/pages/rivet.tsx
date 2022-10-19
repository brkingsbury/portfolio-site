import './pageStyles.scss';
import { Card } from '../components/card';
import rivet1 from '../assets/rivet.png';
import rivet2 from '../assets/rivet-2.png';
import rivet3 from '../assets/rivet-3.png';
import rivet4 from '../assets/rivet-4.png';
import rivet5 from '../assets/rivet-5.png';
import rivet6 from '../assets/rivet-6.png';
import github from '../assets/icons/github.svg';

export default function Rivet() {
    return (
        <section>
            <p>Rivet is an internal design system and component library built for both designers and developers.</p>
            <ul className="project-details">
                <li>HTML | SCSS | Angular / Typescript</li>
                <li>
                    <img src={github} />&nbsp;
                    <a href="">Documentation site</a> /&nbsp;
                    <a href="">NPM style package</a>
                </li>
            </ul>
            <Card img={rivet1} />
            <Card img={rivet2} />
            <Card img={rivet3} />
            <Card img={rivet4} />
            <Card img={rivet5} />
            <Card img={rivet6} />
        </section>
    )
}