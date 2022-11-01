import linkedin from '../assets/icons/linkedin.svg';
import github from '../assets/icons/github.svg';

export default function Footer() {
    return (
        <footer>
            {/* <p>this footer</p> */}
            <a href="https://www.linkedin.com/in/brian-kingsbury-37b274140/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BYXo9Sn9hQpGYWtrTkQQAaA%3D%3D">
                <img src={linkedin} />
            </a>
            < a href="https://github.com/brkingsbury">
                <img src={github} />
            </a>
        </footer>
    )
}