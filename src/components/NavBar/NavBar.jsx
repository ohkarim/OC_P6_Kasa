import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
    // Style to apply to active NavLinks
    let activeStyle = {
        textDecoration: "underline",
      };

    return (
        <nav className="nav-bar">
            <li className="nav-bar--title">
                <NavLink 
                    to="/" 
                    className="nav-bar--link"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Accueil
                </NavLink>
            </li>
            <li className="nav-bar--title">
                <NavLink 
                    to="/about" 
                    className="nav-bar--link"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    À Propos
                </NavLink>
            </li>
        </nav>
    );
}
