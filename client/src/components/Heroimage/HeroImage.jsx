import React from 'react';
import classes from './HeroImage.module.scss';

export default function HeroImage() {
  return (
    <div className={classes.HeroImage}>
      <div className={classes.laptop}>
        <img src="./assets/laptop.png" alt="laptop" />
      </div>
    </div>
  );
}
