import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <NavLink to={'about'}>About</NavLink>
            <NavLink to={'work'}>Work</NavLink>
            <a href="">Something</a>
        </nav>
    )
}

