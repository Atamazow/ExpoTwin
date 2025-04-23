import React from "react";
import videoLifecycle from "../../assets/videos/20250316-1534-seaside-construction-transformation-simple-compose_utCJ2YuS.mp4";
import style from "./Lifecycle.module.scss";
const Lifecycle = () => {
  return (
    <div className={style.lifecycleMain}>
      <video className={style.videoPlay} autoPlay loop muted>
        <source src={videoLifecycle} />
      </video>
      <div>
        <div className={style.container}>
          <div className={style.headerTag}>
            <h5>WHAT DO WE OFFER?</h5>
          </div>

          <h2 className={style.title}>
            Interactive Visualization of All Asset Stages
          </h2>

          <p className={style.description}>
            We create dynamic digital 3D models that provide a real-time,
            interactive view of an asset's entire lifecycle - from pre-
            construction planning to fully completed project. These models are
            primarily valuable for development ecosystems, offering a clear and
            engaging way to explore assets at every stage.
          </p>

          <p className={style.description}>
            Our technology goes beyond rich estate, mining, oil, and industrial
            assets to natural resources and infrastructure projects. Whether
            visualizing a commercial property, a mining site, or a logistics
            hub, our platform delivers a photorealistic, data- rich experience.
            Investors and stakeholders can conduct virtual inspections, analyze
            asset potential, and make informed decisions before physical
            development is completed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lifecycle;
