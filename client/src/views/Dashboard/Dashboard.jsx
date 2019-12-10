import React from 'react';
import DashboardPanel from './DashboardPanel';
import { Route } from 'react-router-dom';
import Home from './Home';
import Transfer from './Transfer';

export default function Dashboard() {
  return (
    <div>
      <DashboardPanel />
      <div>
        <Route exact path="/dashboard" component={Home}></Route>
        <Route exact path="/dashboard/transfer" component={Transfer}></Route>
      </div>
    </div>
  );
}
