import React from "react";
import HeroSection from "./subComponents/HeroSection";
import Recipes from "./subComponents/Recipes";

const Home = ({ recipes }) => {
  return (
    <>
      <HeroSection />
      <Recipes recipes={recipes} />
    </>
  );
};

export default Home;
