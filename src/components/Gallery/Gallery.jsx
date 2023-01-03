import { useEffect } from "react";
import { useState } from "react";
import RentalCard from "../RentalCard/RentalCard"

export default function Gallery() {
    const [rentals, setRentals] = useState([]);

    useEffect(() => {
        fetch('./db/logements.json')
            .then(res => res.json())
            .then(data => setRentals(data))
            .catch((error) => console.log(error));
    }, []);

    return ( 
        <section className="gallery">
            {rentals.map(rental => (
                <RentalCard 
                    key={rental.id}
                    title={rental.title}
                    cover={rental.cover}
                />
            ))}
        </section>
     );
};