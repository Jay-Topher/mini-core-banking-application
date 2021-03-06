import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.scss';

export default function Navbar() {
  return (
    <div className={classes.Navbar}>
      <div className={classes.logo}>
        <img src="./assets/renmoney.png" alt="renmoney" />
      </div>

      <Link to="/signup">
        <button className={classes.btn}>Get Started</button>
      </Link>
    </div>
  );
}
