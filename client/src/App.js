import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './views/Home/Home';
import SignUpForm from './views/Signup/SignupForm';
import SignUp from './views/Signup/SignUp';
import LoginPage from './views/Login/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LoginPage} />
      {/* <Route path="/profile" component={Dashboard} />
      <Route path="/tasks" component={Dashboard} />
      <Route path="/team" component={Dashboard} /> */}
      {/* <Route path="/confirm/:id" component={Confirm} /> */}
    </Switch>
  );
}

export default App;
