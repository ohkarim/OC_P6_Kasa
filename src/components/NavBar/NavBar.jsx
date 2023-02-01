import { NavLink } from "react-router-dom";

import kasaLogo from "../../assets/images/kasa-logo.png";
import navBarStyles from "./Navbar.module.css";

/** 
 * @function NavBar - The functional component that renders the navigation bar.
 * @constant {object} activeStyle - The style of the active link.
 * @constant {string} activeStyle.textDecoration - The text decoration of the active link.
 * @return {JSX.Element} The rendered component.
*/

export default function NavBar() {
    let activeStyle = {
        textDecoration: "underline",
      };

    return (
        <nav className={navBarStyles["nav-bar"]}>
            <img src={kasaLogo} alt="Logo Kasa" className={navBarStyles["nav-bar--logo"]} />
            <ul>
                <li className={navBarStyles["nav-bar--title"]}>
                    <NavLink 
                        to="/" 
                        className={navBarStyles["nav-bar--link"]}
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Accueil
                    </NavLink>
                </li>
                <li className={navBarStyles["nav-bar--title"]}>
                    <NavLink 
                        to="/about" 
                        className={navBarStyles["nav-bar--link"]}
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
};
