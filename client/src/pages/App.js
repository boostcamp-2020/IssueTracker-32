import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IssuePage from './IssuePage';
import LoginPage from './LoginPage';
import SocialPage from './SocialPage';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={IssuePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/social" component={SocialPage} />
    </Switch>
  );
};

export default App;
