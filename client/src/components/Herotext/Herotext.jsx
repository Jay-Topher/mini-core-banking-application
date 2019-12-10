import React from 'react';
import classes from './Herotext.module.scss';

export default function Herotext() {
  return (
    <div className={classes.HeroText}>
      <h2 className={classes.title}>
        A penny saved is worth two pennies earned <br />. . . after taxes.
      </h2>
      <button>Get Started</button>
    </div>
  );
}
