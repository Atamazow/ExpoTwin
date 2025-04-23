import React from "react";
import Header from "../../components/Header/Header";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import AboutSection from "../../components/AboutSection/AboutSection";
import style from "./Home.module.scss";
import Lifecycle from "../../components/Lifecycle/Lifecycle";
const Home = () => {
  return (
    <div>
      <Header />
      <main className={style.main}>
        <BackgroundImage />
        <AboutSection />
        <Lifecycle />
      </main>
    </div>
  );
};

export default Home;
