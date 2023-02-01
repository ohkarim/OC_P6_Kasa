import { Link } from "react-router-dom";
import rentalCardStyles from "./Rental-card.module.css";

/**
 * @function RentalCard - The functional component that renders the rental card.
 * @param {Object} props - The properties of the component.
 * @param {string} props.id - The id of the rental.
 * @param {string} props.cover - The cover of the rental.
 * @param {string} props.title - The title of the rental.
 * @param {string} props.alt - The alt of the rental.
 * @return {JSX.Element} The rendered component.
*/

export default function RentalCard({ id, cover, title, alt }) {
    return (
        <Link to={`/rental/${id}`}>
            <article className={rentalCardStyles["rental--card"]}>
                <img src={cover} alt={alt} className={rentalCardStyles["rental--card--img"]} />
                <p className={rentalCardStyles["rental--card--title"]}>{title}</p>
            </article>
        </Link>
    );
};