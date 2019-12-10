import React from 'react';
import { NavLink } from 'react-router-dom';

import './Dashboard.css';

export default function DashboardPanel() {
  return (
    <nav className="main-nav">
      <ul>
        <NavLink to="/dashboard" activeClassName="active-link-class">
          <li>
            <i className="mdi mdi-account"></i> Dashboard
          </li>
        </NavLink>
        <NavLink to="/dashboard/transfer" activeClassName="active-link-class">
          <li>
            <i className="mdi mdi-account"></i> Transfer
          </li>
        </NavLink>
        <li>
          <i className="mdi mdi-account"></i> Transactions
        </li>
        <li>
          <i className="mdi mdi-logout"></i> Logout
        </li>
      </ul>
    </nav>
  );
}
