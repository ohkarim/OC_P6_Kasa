// import { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";
import useFetch from "../hooks/UseFetch";

import homeBannerImg from "../assets/images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg";

function Home() {
  const [rentals, loading] = useFetch('./db/logements.json');

  console.log(rentals);
  return (
    <>
      <main>
        <Banner image={homeBannerImg} text="Chez vous, partout et ailleurs" />
        {!loading && <Gallery rentals={rentals} />}
      </main>
    </>
  );
};

export default Home;