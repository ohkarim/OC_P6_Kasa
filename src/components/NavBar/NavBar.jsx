import { Link, NavLink } from "react-router-dom";

//TODO: for NavLink, make them "active" with underline, maybe with ternary 

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <li className="nav-bar--title">
                <NavLink to="/" className="nav-bar--link">Accueil</NavLink>
            </li>
            <li className="nav-bar--title">
                <NavLink to="/about" className="nav-bar--link">À Propos</NavLink>
            </li>
        </nav>
    );
}
