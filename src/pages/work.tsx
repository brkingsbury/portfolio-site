import { CardContainer } from '../components/card';
import cym from '../assets/cym.png';
import rivet from '../assets/rivet.png';

export default function Work() {
    return (
        <section>
            <CardContainer
                header="Rivet - Design System + Component Library"
                img={rivet}
                url=""
                built="HTML | SCSS | Angular/Typescript"
            />

            <CardContainer
                header="Cultivate Yoga MKE - Website"
                img={cym}
                url="https://www.cultivateyogamke.com"
                built="HTML | SCSS | Angular/Typescript"
            />
        </section>
    )
}