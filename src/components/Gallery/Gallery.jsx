import galleryStyles from "./Gallery.module.css";

import RentalCard from "../RentalCard/RentalCard"

/**
 * @function Gallery - The functional component that renders a section of rental cards.
 * @param {Object} props - The properties of the component.
 * @param {Array} props.rentals - The array of rental objects.
 * @return {JSX.Element} The rendered component.
 */

export default function Gallery({ rentals }) {
    return (
        <section className={galleryStyles["gallery"]}>
            {rentals.map(rental => (
                <RentalCard
                    key={rental.id}
                    id={rental.id}
                    title={rental.title}
                    cover={rental.cover}
                    alt={rental.title}
                />
            ))}
        </section>
    );
};