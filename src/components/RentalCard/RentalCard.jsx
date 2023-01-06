import "./rental-card.css";

export default function RentalCard(props) {
    return(
        <article className="rental--card">
            <img src={props.cover} alt="Photo principale du logement" className="rental--card--img" />
            <p className="rental--card--title">{props.title}</p>
        </article>
    );
};