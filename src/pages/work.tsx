import { CardContainer } from '../components/card';
import cym from '../assets/cym.png';
import rivet from '../assets/rivet-main.png';
import retro from '../assets/retro_1.png';

export default function Work() {
    return (
        <section className='work'>
            <CardContainer
                header="Rivet Design System"
                status="completed"
                img={rivet}
                code="HTML | SCSS | Angular / Typescript"
                alt="Landing page for Rivet design system"
                description="A documentation site and component library for an internal design system"
                link="./rivet"
            />

            <hr className='card-divider' />

            <CardContainer
                header="Cultivate Yoga MKE website"
                status="active"
                code="HTML | SCSS | Angular / Typescript"
                img={cym}
                alt="Landing page for Cultivate Yoga MKE website"
                description="Website and branding for yoga classes"
                link="./cym"
            />

            <hr className='card-divider' />

            <CardContainer
                header="Retro"
                status="in progress"
                img={retro}
                code="HTML | SCSS | React / Typescript"
                link="./retro" />


            <hr className='card-divider' />

            <p>Also, this site! Using this space to experiment with new CSS features, learn React, and try new shit. <br />
                Next up: colors/themes, mobile version, more CSS experiments</p>
        </section>
    )
}