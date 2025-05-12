import React from "react";
import Header from "../../components/Header/Header";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import AboutSection from "../../components/AboutSection/AboutSection";
import style from "./Home.module.scss";
import Lifecycle from "../../components/Lifecycle/Lifecycle";
import DemoProduct from "../../components/DemoProduct/DemoProduct";
import FounderStatement from "../../components/FounderStatement/FounderStatement";
const Home = () => {
  return (
    <div>
      <Header />
      <main className={style.main}>
        <BackgroundImage />
        <AboutSection />
        <Lifecycle />
        <DemoProduct />
        <div className={style.demoBlock}>
          <p className={style.text}>
            The demo product is available directly in the <br /> browser without
            the need to install additional applications.
          </p>
        </div>
        <FounderStatement />
      </main>
    </div>
  );
};

export default Home;
