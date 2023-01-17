import { useState } from "react";

import carouselStyles from "./Carousel.module.css";

// TODO: styling for carousel, + importing arrows icons for prev/next

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePreviousClick = () => {
        setCurrentIndex(currentIndex - 1);
    };

    const handleNextClick = () => {
        setCurrentIndex(currentIndex + 1);
    };

    return (
        <section className={carouselStyles["carousel--container"]} style={{ backgroundImage: `url(${images[currentIndex]})` }}>
            {currentIndex !== 0 && <button onClick={handlePreviousClick}>
                Précédent
            </button>}
            {currentIndex !== images.length - 1 && <button onClick={handleNextClick}>
                Suivant
            </button>}
            <p>
                {currentIndex + 1}/{images.length}
            </p>
        </section>
    );
};

export default Carousel;