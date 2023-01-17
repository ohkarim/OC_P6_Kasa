import { Link } from "react-router-dom";
import rentalCardStyles from "./Rental-card.module.css";

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