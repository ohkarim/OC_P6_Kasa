import headerStyles from "./Header.module.css";

import NavBar from "../NavBar/NavBar";

export default function Header() {
    return (
        <header className={headerStyles["header"]}>
            <NavBar />
        </header>
    );
};


