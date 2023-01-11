import { NavLink } from "react-router-dom";

import kasaLogo from "../../assets/images/kasa-logo.png";
import "./navbar.css";

export default function NavBar() {
    // Style to apply to active NavLinks
    let activeStyle = {
        textDecoration: "underline",
      };

    return (
        <nav className="nav-bar">
            <img src={kasaLogo} alt="Logo Kasa" className="nav-bar--logo" />
            <ul>
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
            </ul>
        </nav>
    );
}
