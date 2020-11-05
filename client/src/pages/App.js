import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IssuePage from './IssuePage';
import LoginPage from './LoginPage';
import SaveJWTPage from './SaveJWTPage';
import NavigationBar from '@components/Common/NavigationBar';
import Footer from '@components/Common/Footer';
import styled from 'styled-components';

const RouteWrapper = styled.div`
  margin-top: 100px;
  padding: 0px 50px;
`;

const App = () => {
  return (
    <>
      <NavigationBar />
      <RouteWrapper>
        <Switch>
          <Route path="/" exact component={IssuePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/social" component={SaveJWTPage} />
        </Switch>
      </RouteWrapper>
      <Footer />
    </>
  );
};

export default App;
