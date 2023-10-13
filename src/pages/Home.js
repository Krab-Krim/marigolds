import React from "react";
import Banner from "./Banner";
import Peculiarities from "./Peculiarities";
import BannerPortfolio from "./BannerPortfolio";
import BannerMini from "./BannerMini";
import PopularPrice from "./PopularPrice";

function Home () {
  return (
    <>
      <Banner/>
      <Peculiarities/>
      <BannerMini/>
      <PopularPrice/>
      <BannerPortfolio/>
    </>
  )
}

export default Home;
