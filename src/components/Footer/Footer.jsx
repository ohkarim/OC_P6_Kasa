import footerStyles from "./Footer.module.css";

import kasaLogoWhite from "../../assets/images/kasa-logo-white.png";

/** 
 * @function Footer - The functional component that renders the footer.
 * @return {JSX.Element} The rendered component.
*/

export default function Footer () {
    return (
        <footer className={footerStyles["footer"]}>
            <img src={kasaLogoWhite} alt="Logo Kasa blanc" className={footerStyles["footer--logo"]} />
            <p className={footerStyles["footer--copyright"]}>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

