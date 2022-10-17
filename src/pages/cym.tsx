import { Card } from '../components/card';
import cym1 from '../assets/cym.png';
import cym2 from '../assets/cym-2.png';

export default function Cultivate () {
    return (
        <section>
            <p>A website for CYM</p>
            <a href="https://www.cultivateyogamke.com">URL</a>
            <Card img={cym1}/>
            {/* <Card img={cym2}/> */}
        </section>
    )
}