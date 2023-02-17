import './componentStyles.scss';
import './headerStyles.scss';
import arrow from '../assets/Vector.svg';
import Nav from '../components/nav';

export default function Header() {
    return (
        <header>
            <div className='header-block'>
                <h1>Brian Kingsbury</h1>
                <hr className='divider'/>
                <p className="subhead">UX Developer</p>
                {/* <div className="hey" aria-hidden="true">
                <p><img src={arrow}/>Hey that's me!</p>
            </div> */}
            </div>
            
            <Nav/>
        </header>
    )
}

// {/* <nav className='navi'>
//                 <a href="#">About</a>
//                 <a href="#">Work</a>
//                 <a href="#">Something</a>
//                 {/* <hr className='nav-divider'/> */}
//             </nav> */}