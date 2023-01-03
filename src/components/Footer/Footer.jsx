import kasaLogoWhite from "../../kasa-logo-white.png";

export default function Footer () {
    return (
        <footer className="footer">
            <img src={kasaLogoWhite} alt="Logo Kasa blanc" className="footer--logo" />
            <p className="footer--copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

