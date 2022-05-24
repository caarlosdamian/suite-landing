import React from "react";
import jeremy from '../../assets/image-jeremy-large.png'
import pattern from '../../assets/pattern-curved-line-2.svg'
import patternBlur from '../../assets/pattern-blur.svg'

import './Hero.scss'

export const Hero = () => {
  return (
    <div className="hero__container">
      <img src={jeremy} alt="jeremy" className="hero__img" />
      <img src={pattern} alt="pattern" className="hero__img-pattern" />
      <img src={jeremy} alt="jeremy" className="hero__img" />
      <img src={patternBlur} alt="patternBlur" className="hero__img-blur" />
      <div className="hero__wrapper">
      <div className="hero__wrapper-inner">
        <h1 className="hero__footer">
          It just <strong className="strong__header">works.</strong>
        </h1>
        <p className="hero__text">
          “I really like how it is an all-in-one solution that handle many of
          the tasks that you would normally need separate tools to do the same
          job. This thing is a miracle worker.”
        </p>
        <h3 className="hero__footer-header">JEREMY ROBINSON</h3>
        <h3 className="hero__footer-subtitle">CMO, FYLO</h3>
      </div>
      </div>
    </div>
  );
};
