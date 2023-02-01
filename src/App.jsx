/**
 * The main component of the application
 * Renders the Header, Footer and routes components
 * @file App.js
 */

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Rental from "./pages/Rental/Rental";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";

/**
 * Renders the header, footer and routes components
 * using the Route component from react-router-dom
 * @function App
 * @returns {JSX.Element} The rendered component.
 */

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rental/:id" element={<Rental />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;