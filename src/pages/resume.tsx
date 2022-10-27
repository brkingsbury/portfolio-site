import file from '../assets/icons/file.svg';

export default function resume() {
    return (
        <section className="resume">
            <div className="experience">
                <h3>Experience</h3>
                <h4>Senior Designer</h4>
                <div className="length">
                    <p>InvestCloud (Acquired Advicent)</p>
                    <p>March 2021 - June 2022</p>
                </div>
                <ul className="duties">
                    <li>Created user flows for internal teams</li>
                    <li>Designed UI mock-ups in Sketch using internal design system</li>
                    <li>Created custom branded design systems for client projects</li>
                    <li>Designed layouts for print and digital books for clients</li>
                </ul>
                <h4>Senior UX Developer</h4>
                <div className="length">
                    <p>Advicent</p>
                    <p>February 2020 - March 2021</p>
                </div>
                <ul className="duties">
                    <li>Design and development owner of internal design system and component library</li>
                    <ul className="sublist">
                        <li>Added to and maintained Sketch library of design system</li>
                        <li>Added/Edited code in component library (HTML, SCSS, Angular)</li>
                        <li>Maintained thorough documentation of component library with live examples, use cases, and implementation standards</li>
                    </ul>
                    <li>Helped development teams across different projects, including writing new code, improved UI style, fixing bugs, and performing code reviews</li>
                    <li>Accessibility S.M.E for design and development</li>
                    <ul className="sublist">
                        <li>Performed accessibility audits on all products</li>
                        <li>Created a roadmap for how to gradually improve compliance over time</li>
                        <li>Logged improvements for designers and developers, and provided accessibility design reviews and code reviews</li>
                    </ul>
                </ul>
                <h4>UX Developer / Associate UX Developer</h4>
                <div className="length">
                    <p>Advicent</p>
                    <p>April 2016 - February 2020</p>
                </div>
                <ul className="duties">
                    <li>Developed UIs for various products</li>
                    <li>Created reusable components and styles for multiple development teams</li>
                    <li>Conceptualized and built a design system and component library</li>
                </ul>
            </div>

            <div className="skills">
                <h3>Skills</h3>
                <h4>Development</h4>
                <ul className="skills-list">
                    <li>HTML</li>
                    <li>CSS (SCSS/Less)</li>
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
                </ul>
                <h4>Tools</h4>
                <ul className="skills-list">
                    <li>Sketch</li>
                    <li>Figma</li>
                    <li>Adobe Creative Suite</li>
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
                    <a href="../assets/BK_Resume.pdf" download>here</a>
                </p>
            </div>
        </section>
        
    )
}