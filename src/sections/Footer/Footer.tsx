import React from "react";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import twitter from "../../assets/icon-twitter.svg";

import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__left">
        <img src={logo} alt="logo" className="footer_left_logo" />
      </div>
      <div className="footer__middle">
        <span className="footer__middle-text">Copyright - Suite</span>
      </div>
      <div className="footer__right">
        <img src={facebook} alt="facebook" className="footer__icon" />
        <img src={twitter} alt="twitter" className="footer__icon" />
        <img src={instagram} alt="instagram" className="footer__icon" />
      </div>
    </div>
  );
};
