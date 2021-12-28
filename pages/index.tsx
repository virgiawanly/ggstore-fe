import AOS from "aos";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import FeaturedGames from "../components/organisms/FeaturedGames";
import Footer from "../components/organisms/Footer";
import MainBanner from "../components/organisms/MainBanner";
import Navbar from "../components/organisms/Navbar";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/Story";
import TransactionStep from "../components/organisms/TransactionStep";

const Home: NextPage = function () {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>GGStore - Topup & Geta New Experience in Gaming</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta property="og:title" content="GGStore - Topup sekarang!" />
        <meta
          property="og:description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1640457298166-fe3eddec2d5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
        />
        <meta property="og:url" content="https://bwa-ggstore.vercel.app" />
      </Head>
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
