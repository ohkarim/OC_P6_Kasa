// import { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";

import homeBannerImg from "../assets/images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg";

function Home() {
  return (
    <>
      <main>
        <Banner image={homeBannerImg} alt="Paysage montagneux et arboré" text="Chez vous, partout et ailleurs"/>
        <Gallery />
      </main>
    </>
  );
}

export default Home;