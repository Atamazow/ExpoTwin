import React from "react";
import imageAbout from "../../assets/Images/about.jpeg";
import style from "./AboutSection.module.scss";
const AboutSection = () => {
  return (
    <div className={style.mainAbout}>
      <img className={style.imageAbout} src={imageAbout} alt="" />
      <section className={style.aboutSection}>
        <h4 className={style.minTitle}>who we are?</h4>
        <h1 className={style.title}>Expovision Digital Twins & Assets Lab</h1>
        <p className={style.textOne}>
          We are a technology company specializing in asset digitization and
          tokenization. Our platform makes investing seamless by simplifying
          complex data through intuitive visualization and interactive digital
          twins. We transform real estate, natural resources, and infrastructure
          into secure, transparent, and easily accessible digital assets,
          enhancing their marketability and investment potential.
        </p>
        <p>
          By integrating advanced 3D visualization with blockchain technology,
          we provide a clear and interactive representation of assets at every
          stage—from initial concept to full-scale development. This allows
          investors to explore, analyze, and make informed decisions with
          confidence, removing barriers to entry and making investment
          opportunities more accessible than ever.
        </p>
      </section>
    </div>
  );
};

export default AboutSection;
