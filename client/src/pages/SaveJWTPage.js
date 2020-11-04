import React from 'react';
import qs from 'query-string';
import { Redirect } from 'react-router-dom';

const SaveJWTPage = ({ location }) => {
  const { token } = qs.parse(location.search);
  window.localStorage.setItem('token', token);
  return <Redirect to="/" />;
};

export default SaveJWTPage;
