import headerStyles from "./Header.module.css";

import NavBar from "../NavBar/NavBar";

/**
 * @function Header - The functional component that renders the header.
 * @return {JSX.Element} The rendered component.
*/

export default function Header() {
    return (
        <header className={headerStyles["header"]}>
            <NavBar />
        </header>
    );
};


