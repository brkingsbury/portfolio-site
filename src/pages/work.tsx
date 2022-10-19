import { CardContainer } from '../components/card';
import cym from '../assets/cym.png';
import rivet from '../assets/rivet.png';

export default function Work() {
    return (
        <section>
            <CardContainer
                header="Rivet"
                img={rivet}
                description="A documentation site and component library for an internal design system"
                link="../rivet"
            />

            <CardContainer
                header="Cultivate Yoga MKE"
                img={cym}
                description="Website and branding for yoga classes"
                link="../cym"
            />
        </section>
    )
}