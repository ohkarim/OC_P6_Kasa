import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";
import useFetch from "../hooks/UseFetch";

import homeBannerImg from "../assets/images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg";

/**
  * @function Home component displays the main contents of the home page.
  * @param {string} homeBannerImg - The URL of the image to be displayed in the Banner component.
  * @param {array} rentals - The list of rental objects fetched from the database.
  * @param {boolean} loading - A flag to indicate whether the data is being fetched or not.
  * @return {JSX.Element} The rendered component.
  */

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