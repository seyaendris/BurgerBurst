import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Deals from "./components/Deals";
import Review from "./components/Review";
import SpecialMenu from "./components/SpecialMenu";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="menu">
        <Menu />
      </div>

      <div id="deals">
        <Deals />
      </div>

      <div id="special">
        <SpecialMenu />
      </div>

      <div id="review">
        <Review />
      </div>

      <Footer />
    </>
  );
};

export default App;
