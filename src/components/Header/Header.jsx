import React from "react";
import style from "./Header.module.scss";
import logoExpo from "../../assets/Icons/Vector.png";
const navigate = [
  "about us",
  "offer",
  "Demo product",
  "Founder’s Statement",
  "Advantages",
];

const Header = () => {
  return (
    <div className={style.mainHeader}>
      <div className={style.logoMain}>
        <img className={style.logoHeader} src={logoExpo} alt="" />
      </div>
      <ul className={style.listNav}>
        {navigate.map((nav, i) => (
          <li key={i} className={style.nav}>
            {nav}
          </li>
        ))}
      </ul>
      <button className={style.btnHeader}>try</button>
    </div>
  );
};

export default Header;
