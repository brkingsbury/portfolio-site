import { CardContainer } from '../components/card';
import cym from '../assets/cym.png';
import rivet from '../assets/rivet.png';

export default function Work() {
    return (
        <section>
            <CardContainer
                header="Rivet"
                img={rivet}
                alt="Landing page for Rivet design system"
                description="A documentation site and component library for an internal design system"
                link="../rivet"
            />

            <CardContainer
                header="Cultivate Yoga MKE"
                img={cym}
                alt="Landing page for Cultivate Yoga MKE website"
                description="Website and branding for yoga classes"
                link="../cym"
            />
            <CardContainer
            header="This Site"
            description="Building out this site to learn React and experiment with the latest in CSS. Next up: more React, colors/themes, mobile version, latest CSS improvements, and more."
            />
        </section>
    )
}