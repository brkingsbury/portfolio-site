import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="navi">
            <NavLink to={'about'}>About</NavLink>
            <NavLink to={'work'}>Work</NavLink>
            <NavLink to={'resume'}>Resume</NavLink>
        </nav>
    )
}

