import { useState } from "react";

import carouselStyles from "./Carousel.module.css";
import arrowLeft from "../../assets/images/arrow-left.png";
import arrowRight from "../../assets/images/arrow-right.png";

/** 
 * @function Carousel - The functional component that renders the carousel.
 * @param {object} props - The properties of the component.
 * @param {array} props.images - The array of images of the carousel.
 * @constant {number} currentIndex - The index of the current image.
 * @constant {function} setCurrentIndex - The function that sets the current index.
 * @constant {function} handlePreviousClick - The function that handles the previous click.
 * @constant {function} handleNextClick - The function that handles the next click.
 * @return {JSX.Element} The rendered component.
*/

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePreviousClick = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    return (
        <section className={carouselStyles["carousel--container"]} style={{ backgroundImage: `url(${images[currentIndex]})` }}>
            {images.length > 1 && <img src={arrowLeft} alt="Bouton précédent" onClick={handlePreviousClick} className={carouselStyles["carousel--button--prev"]} />}
            {images.length > 1 && <img src={arrowRight} alt="Bouton suivant" onClick={handleNextClick} className={carouselStyles["carousel--button--next"]} />}
            {images.length > 1 && <p className={carouselStyles["carousel--counter"]}>
                {currentIndex + 1}/{images.length}
            </p>}
        </section>
    );
};

export default Carousel;
