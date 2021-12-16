import React, { useEffect } from "react";
import type { NextPage } from "next";
import AOS from "aos";
import Navbar from "../components/organisms/Navbar";
import MainBanner from "../components/organisms/MainBanner";
import TransactionStep from "../components/organisms/TransactionStep";
import FeaturedGames from "../components/organisms/FeaturedGames";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/Story";
import Footer from "../components/organisms/Footer";

const Home: NextPage = function () {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* Navbar Section */}
      <Navbar />
      {/* Banner Section */}
      <MainBanner />
      {/* Transaction Step Section */}
      <TransactionStep />
      {/* Featured Games Section */}
      <FeaturedGames />
      {/* Reached Section */}
      <Reached />
      {/* Story Section */}
      <Story />
      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Home;
