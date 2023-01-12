import { Link } from "react-router-dom";

import errorStyles from "./Error.module.css";

function Error() {
    return ( 
        <section className={errorStyles["error--container"]}>
            <h1 className={errorStyles["error--title"]}>404</h1>
            <h2 className={errorStyles["error--subtitle"]}>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/" className={errorStyles["error--home-link"]}>Retourner sur la page d’accueil</Link>
        </section>
    );
};

export default Error;