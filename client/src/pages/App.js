import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IssuePage from '@pages/IssuePage';
import LoginPage from '@pages/LoginPage';
import SaveJWTPage from '@pages/SaveJWTPage';
import NewIssuePage from '@pages/NewIssuePage';
import IssueDetailPage from '@pages/IssueDetailPage';
import NavigationBar from '@Common/NavigationBar';
import Footer from '@Common/Footer';
import styled from 'styled-components';
import GlobalStyle from '@Common/GlobalStyle';

const RouteWrapper = styled.div`
  margin-top: 100px;
  padding: 0px 50px;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <RouteWrapper>
        <Switch>
          <Route path="/" exact component={IssuePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/social" component={SaveJWTPage} />
          <Route path="/newissue" component={NewIssuePage} />
          <Route path="/issuedetail" component={IssueDetailPage} />
        </Switch>
      </RouteWrapper>
      <Footer />
    </>
  );
};

export default App;
