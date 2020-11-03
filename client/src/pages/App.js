import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IssuePage from './IssuePage';
import LoginPage from './LoginPage';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={IssuePage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
};

export default App;
