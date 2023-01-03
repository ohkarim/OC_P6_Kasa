import kasaLogo from "../../kasa-logo.png";
import NavBar from "../NavBar/NavBar";

export default function Header() {
    return (
        <header className="header">
            <div className="header--container">
                <img src={kasaLogo} alt="Logo Kasa" className="header--logo" />
                <NavBar />
            </div>
        </header>
    );
};


