import { useState } from "react";
import starIcon from "../../assets/images/star-rate.svg";
import ratingStyles from "./Rating.module.css";

/** 
 * @function Rating - The functional component that renders the rating.
 * @param {Object} props - The properties of the component.
 * @param {number} props.rate - The rate of the rating.
 * @constant {Array} stars - The array of stars.
 * @constant {number} rating - The rating.
 * @constant {function} setRating - The function that sets the rating.
 * @return {JSX.Element} The rendered component.
*/

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