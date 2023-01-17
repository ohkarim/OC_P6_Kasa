import { Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Rental from "./pages/Rental/Rental";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";

// TODO: setup context


function App() {
    const [rentals, setRentals] = useState([]);

    useEffect(() => {
        fetch('./db/logements.json')
            .then(res => res.json())
            .then(data => setRentals(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home rentals={rentals} />} />
                <Route path="/rental/:id" element={<Rental rentals={rentals} />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;