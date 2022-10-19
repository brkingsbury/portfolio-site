import './pageStyles.scss';
import { Card } from '../components/card';
import cym1 from '../assets/cym.png';
import github from '../assets/icons/github.svg';

export default function Cultivate() {
    return (
        <section>
            <p>A website for CYM</p>
            <ul className="project-details">
                <li>HTML | SCSS | Angular / Typescript</li>
                <li>
                    <a href="https://www.cultivateyogamke.com" target="_blank">Website</a>
                </li>
                <li>
                    <img src={github} />&nbsp;
                    <a href="https://github.com/" target="_blank">Github</a>
                </li>
            </ul>
            <Card img={cym1} />
        </section>
    )
}