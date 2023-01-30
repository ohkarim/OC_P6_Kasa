import { useState } from "react";

import carouselStyles from "./Carousel.module.css";
import arrowLeft from "../../assets/images/arrow-left.png";
import arrowRight from "../../assets/images/arrow-right.png";

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePreviousClick = () => {
        setCurrentIndex(currentIndex - 1);
    };

    const handleNextClick = () => {
        setCurrentIndex(currentIndex + 1);
    };

    // TODO: click on first prev on 1st image = last img, vice versa

    return (
        <section className={carouselStyles["carousel--container"]} style={{ backgroundImage: `url(${images[currentIndex]})` }}>
            {currentIndex !== 0 && <img src={arrowLeft} alt="Bouton précédent" onClick={handlePreviousClick} className={carouselStyles["carousel--button--prev"]} />}
            {currentIndex !== images.length - 1 && <img src={arrowRight} alt="Bouton suivant" onClick={handleNextClick} className={carouselStyles["carousel--button--next"]} />}
            <p className={carouselStyles["carousel--counter"]}>
                {currentIndex + 1}/{images.length}
            </p>
        </section>
    );
};

export default Carousel;