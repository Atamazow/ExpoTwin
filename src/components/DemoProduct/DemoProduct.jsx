import React from "react";
import image1 from "../../assets/Images/z4nmgaqZqYLkCF5w7CTQSIKk4uo.png.png";
import image2 from "../../assets/Images/4d41908a4c02d660a72375fb12da520a695a2563 (1).png";
import image3 from "../../assets/Images/b5e0a637cec9f8900e0c2de56682058a06e64c0e.png";
import logo from "../../assets/Icons/Vector.png";
import styles from "./DemoProduct.module.scss";
const features = [
  {
    id: 1,
    title: "Viewing residential and commercial properties in a",
    highlight: " detailed format",
    image: image1,
    alt: "Residential property visualization",
  },
  {
    id: 2,
    title: "Switching between apartment",
    highlight: " types",
    additionalText: " and construction",
    additionalHighlight: " stages",
    image: image2,
    alt: "Apartment building visualization",
    imageFirst: true,
  },
  {
    id: 3,
    title: "Real-time financial",
    highlight: " insights",
    additionalText: " and",
    additionalHighlight: " investment",
    closingText: " potential at",
    closingHighlight: " your fingertips.",
    image: image3,
    alt: "Financial insights visualization",
  },
];

const DemoProduct = () => {
  // Feature data array

  return (
    <div className={styles.demoWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src={logo} alt="digital twin" />
          </div>
          <h1 className={styles.title}>
            Demo product: Interactive Real Estate in Qatar
          </h1>
          <p className={styles.subtitle}>
            Interactive 3D visualization of real real estate in Qatar is
            available on the platform.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.featureItem}>
              <div
                className={styles.featureContent}
                style={feature.imageFirst ? { order: 2 } : {}}
              >
                <h2 className={styles.featureTitle}>
                  {feature.title}
                  <span className={styles.highlighted}>
                    {feature.highlight}
                  </span>
                  {feature.additionalText}
                  {feature.additionalHighlight && (
                    <span className={styles.highlighted}>
                      {feature.additionalHighlight}
                    </span>
                  )}
                  {feature.closingText}
                  {feature.closingHighlight && (
                    <span className={styles.highlighted}>
                      {feature.closingHighlight}
                    </span>
                  )}
                </h2>
              </div>
              <div
                className={styles.featureImage}
                style={feature.imageFirst ? { order: 1 } : {}}
              >
                <img src={feature.image} alt={feature.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoProduct;
