import './componentStyles.scss';
import arrow from '../assets/Vector.svg';

export default function Header() {
    return (
        <header>
            <h1>Brian<br />Kingsbury</h1>
            <p className="subhead">UX Developer</p>
            <div className="hey" aria-hidden="true">
                <p><img src={arrow}/>Hey that's me!</p>
            </div>
        </header>
    )
}