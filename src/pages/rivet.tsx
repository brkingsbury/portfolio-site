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
            <p>Rivet is an internal design system and component library built for both designers and developers. It consists of two parts, one being an NPM package containing all the components and styles for developers to import into their projects, and the other part being the documentation site. The documentation site showcased the components and styles, explained best practices and use cases, and provided examples with implementation standards.</p>
            <ul className="project-details">
                <li>HTML | SCSS | Angular / Typescript</li>
                <li>
                    <img src={github} />&nbsp;
                    <a href="https://github.com/brkingsbury/rivet-documentation" target="_blank">Documentation site</a> /&nbsp;
                    <a href="https://github.com/brkingsbury/rivet-npm" target="_blank">NPM style package</a>
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