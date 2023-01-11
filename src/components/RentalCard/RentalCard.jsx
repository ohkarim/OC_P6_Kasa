import rentalCardStyles from "./Rental-card.module.css";

export default function RentalCard(props) {
    return(
        <article className={rentalCardStyles["rental--card"]}>
            <img src={props.cover} alt={props.title} className={rentalCardStyles["rental--card--img"]} />
            <p className={rentalCardStyles["rental--card--title"]}>{props.title}</p>
        </article>
    );
};