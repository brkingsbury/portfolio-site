import file from '../assets/icons/file.svg';

export default function resume() {
    return (
        <section className="resume">
            <div className="experience">
                <h3>Experience</h3>
                <h4>Senior UI Designer</h4>
                <div className="length">
                    <p>InvestCloud</p>
                    <p>March 2021 - June 2022</p>
                </div>
                <ul className="duties">
                    <li>Created user flows and new responsive UIs for desktop, tablet, and mobile</li>
                    <li>Designed UI mock-ups in Sketch using internal design system</li>
                    <li>Created custom branded design systems for client projects</li>
                    <li>Designed layouts for print and digital books for clients using Adobe Suite</li>
                </ul>
                <h4>Senior UX Developer</h4>
                <div className="length">
                    <p>Advicent</p>
                    <p>February 2020 - March 2021</p>
                </div>
                <ul className="duties">
                    <li>Design and development owner of internal design system and component library</li>
                    <li>Added to and maintained Sketch library of design system</li>
                    <li>Added and edited code in component library (HTML, SCSS, Angular)</li>
                    <li>Maintained thorough documentation of component library with live examples, code snippets, use cases, implementation standards, and versioning</li>
                    <li>Helped development teams across different projects, including writing new code, improving UI style, fixing bugs, and performing code reviews</li>
                    <li>Performed accessibility tasks such as full audits, code reviews, design reviews, code improvements and logging outstanding issues</li>
                </ul>
                <h4>UX Developer</h4>
                <div className="length">
                    <p>Advicent</p>
                    <p>May 2017 - February 2020</p>
                </div>
                <ul className="duties">
                    <li>Expanded component library and refactored from Angular JS to Angular 2+</li>
                    <li>Built UIs for new products, created mock-ups and test sites for user testing</li>
                    <li>Performed manual accessibility audits on multiple products</li>
                    <li>Created accessibility roadmap to improve product compliance over time</li>
                </ul>
                <h4>Associate UX Developer</h4>
                <div className="length">
                    <p>Advicent</p>
                    <p>April 2016 - May 2017</p>
                </div>
                <ul className="duties">
                    <li>Developed UIs for multiple development teams across various products</li>
                    <li>Created reusable components and styles for multiple development teams</li>
                    <li>Conceptualized and built a component library using HTML/Less/Angular JS</li>
                </ul>
            </div>

            <div className="skills">
                <h3>Skills</h3>
                <h4>Development</h4>
                <ul className="skills-list">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>SCSS & Less</li>
                    <li>Javascript</li>
                    <li>Typescript</li>
                    <li>Angular</li>
                    <li>Angular JS</li>
                    <li>React</li>
                    <li>WCAG 2.1</li>
                </ul>
                <h4>Design</h4>
                <ul className="skills-list">
                    <li>Design Systems</li>
                    <li>UI Design</li>
                    <li>Material Design</li>
                </ul>
                <h4>Tools</h4>
                <ul className="skills-list">
                    <li>Sketch</li>
                    <li>Figma</li>
                    <li>Abstract</li>
                    <li>InVision</li>
                    <li>Illustrator</li>
                    <li>InDesign</li>
                    <li>Photoshop</li>
                    <li>XD</li>
                    <li>Git</li>
                    <li>axe Tools</li>
                </ul>
            </div>

            <div className="education">
                <h3>Education</h3>
                <h4>Bachelor of Fine Arts - Design & Visual Communication</h4>
                <div className="length">
                    <p>University of Wisconsin - Milwaukee</p>
                    <p>2008 - 2013</p>
                </div>
            </div>

            <div className="download">
                <img src={file} />
                <p>Download a PDF version of this resume&nbsp;
                    <a href="../assets/brian_kingsbury_resume.pdf" download>here</a>
                </p>
            </div >
        </section>

    )
}