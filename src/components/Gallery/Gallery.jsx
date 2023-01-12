import galleryStyles from "./Gallery.module.css";

import RentalCard from "../RentalCard/RentalCard"

export default function Gallery({ rentals }) {
    return ( 
        <section className={galleryStyles["gallery"]}>
            {rentals.map(rental => (
                <RentalCard 
                    key={rental.id}
                    title={rental.title}
                    cover={rental.cover}
                    alt={rental.title}
                />
            ))}
        </section>
     );
};