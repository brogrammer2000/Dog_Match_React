import React from "react";
import HomeIntroduction from "./components/HomeIntroduction";
import RandomPics from "./components/RandomPics";
import Footer from "./components/Footer";
import HomeBody from "./components/HomeBody";

function Home() {
  return (
    <div>
      <HomeIntroduction />
      <RandomPics />
      <HomeBody />
      <Footer />
    </div>
  );
}

export default Home;
