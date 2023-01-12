import rentalCardStyles from "./Rental-card.module.css";

export default function RentalCard({ cover, title, alt }) {
    return(
        <article className={rentalCardStyles["rental--card"]}>
            <img src={ cover } alt={ alt } className={rentalCardStyles["rental--card--img"]} />
            <p className={rentalCardStyles["rental--card--title"]}>{ title }</p>
        </article>
    );
};