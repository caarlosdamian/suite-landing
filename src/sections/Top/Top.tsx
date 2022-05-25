import { Button } from "../../components/Button/Button";
import circle from '../../assets/pattern-curved-line-1.svg'
import cellphone from '../../assets/image-hero-portrait.png'
import cellphoneMobile from '../../assets/image-hero-landscape.png'
import "./Top.scss";

export const Top = () => {
  return (
    <div className="top__container">
        <img className="img-circle" src={circle} alt="circle" />
        <img className="img-cellphone" src={cellphone} alt="cellphone" />
      <div className="top__left">
        <h1 className="top__left-header">
          <strong className="top__left-strong">A</strong> super solution{" "}
          <strong className="top__left-strong">for your </strong>business.
        </h1>
        <p className="top__left-text">
          Our marketing and sales automations help you scale your outreach to
          get more leads for your company.{" "}
        </p>
        <Button label="Request Beta Access" className="btn primary" />
      </div>
      <img src={cellphoneMobile} alt="cellphoneMobile" className="cell-mobile"/>
      <div className="top__right">
        <div className="top__right-labels">
          <span className="top_right-header">2K+</span>
          <span className="top_right-subtitle">COMPANIES</span>
        </div>
        <div className="top__right-labels">
          <span className="top_right-header">8</span>
          <span className="top_right-subtitle">LANGUAGES</span>
        </div>
        <div className="top__right-labels">
          <span className="top_right-header">1.2M</span>
          <span className="top_right-subtitle">LEADS</span>
        </div>
      </div>
    </div>
  );
};
