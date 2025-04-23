import React from "react";
import backgroundLogo from "../../assets/Icons/Vector.png";
import style from "./BackgroundImage.module.scss";

const BackgroundImage = () => {
  return (
    <div className={style.backgroundImage}>
      <div className={style.mainBackground}>
        <div className={style.mainBackgroundLogo}>
          <img className={style.backgLogo} src={backgroundLogo} alt="" />
        </div>
        <div className={style.backgTitle}>
          Expovision Digital Twins & <br />
          Assets Lab
        </div>
        <p className={style.text}>
          We provide companies with advanced digital twin and tokenization
          solutions,allowing them to digitize and tokenize their real estate,
          natural resources, and infras tructure assets through our interactive
          platform.
        </p>
        <button className={style.btnBackg}> TRY </button>
      </div>
    </div>
  );
};

export default BackgroundImage;

//// какой будет порядок вызова и почему
//
// import { useState, useEffect } from "react";
//
// export function Logs3() {
//   const [count, setCount] = useState(1);
//
//   console.log(1);
//
//   useEffect(() => {
//     console.log(2);
//
//     return () => {
//       console.log(3);
//     };
//   }, [count]);
//
//   useEffect(() => {
//     console.log(4);
//     setCount((count) => count + 1);
//   }, []);
//
//   return <Child count={count} />;
// }
//
// function Child({ count }) {
//   useEffect(() => {
//     console.log(5);
//
//     return () => {
//       console.log(6);
//     };
//   }, [count]);
//
//   return "Logs3";
// }
