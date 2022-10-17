import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <NavLink to={'about'}>About</NavLink>
            <NavLink to={'work'}>Work</NavLink>
            <NavLink to={'rivet'} className="subnav">Rivet</NavLink>
            <NavLink to={'cultivate'} className="subnav">CYM</NavLink>
        </nav>
    )
}

