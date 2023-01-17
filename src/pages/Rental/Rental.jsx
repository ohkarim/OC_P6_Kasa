import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import rentalStyles from "./Rental.module.css";

import Carousel from "../../components/Carousel/Carousel";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";


function Rental({ rentals }) {
    // Get the product id param from the URL.
    let { id } = useParams();

    // Store rental data in state
    const [rental, setRental] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        // Finding data from props corresponding to right id
        const rentalFound = rentals.find(rental => rental.id === id);

        // Check if id isn't found, redirect to NoMatch, if not, set state with data corresponding to right id
        if (!rentalFound) {
            navigate('/NoMatch');
        } else {
            setRental(rentalFound);
        }
    }, [rentals, id, navigate])

    if (!rental) {
        return null;
    }

    return (
        <>
            <main>
                <Carousel images={rental.pictures} />
                <div className={rentalStyles["content--container"]}>
                    <div className={rentalStyles["headings--container"]}>
                        <h1 className={rentalStyles["headings--title"]}>
                            {rental.title}
                        </h1>
                        <p className={rentalStyles["headings--location"]}>
                            {rental.location}
                        </p>
                        <Tags tags={rental.tags} />
                    </div>
                    <div className={rentalStyles["hosting--information--container"]}>
                        <Host host={rental.host} />
                        <Rating rate={rental.rating} />
                    </div>
                </div>
                <div className={rentalStyles["hosting--collapse--container"]}>
                    <Collapse title="Description" text={rental.description} isList={false} defaultOpen={true} />
                    <Collapse title="Équipements" listItems={rental.equipments} isList={true} defaultOpen={true} />
                </div>
            </main>
        </>
    );
}

export default Rental;