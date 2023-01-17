import { useState } from "react";
import starIcon from "../../assets/images/star-rate.svg";
import ratingStyles from "./Rating.module.css";

function Rating({ rate }) {
    const [rating, setRating] = useState(rate);
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className={ratingStyles["rating--container"]}>
            {stars.map((star) => (
                <img
                    key={star}
                    src={starIcon}
                    alt={`Étoile ${star}`}
                    className={rating >= star ? ratingStyles["rating--star--filled"] : ratingStyles["rating--star--empty"]}
                    onClick={() => setRating(star)}
                />
            ))}
        </div>
    );
};

export default Rating;