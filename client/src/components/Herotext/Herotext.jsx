import React from 'react';
import classes from './Herotext.module.scss';
import { Link } from 'react-router-dom';

export default function Herotext() {
  return (
    <div className={classes.HeroText}>
      <h2 className={classes.title}>
        &quot;A penny saved is worth two pennies earned . . . after taxes.&quot;
      </h2>
      <p>Start Saving Today</p>
      <Link to="/signup">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
