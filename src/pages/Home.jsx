// import { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";

import homeBannerImg from "../assets/images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg";

function Home({ rentals }) {
  return (
    <>
      <main>
        <Banner image={ homeBannerImg } text="Chez vous, partout et ailleurs"/>
        <Gallery rentals={ rentals } />
      </main>
    </>
  );
};

export default Home;