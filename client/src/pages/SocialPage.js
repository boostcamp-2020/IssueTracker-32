import React from 'react';
import qs from 'query-string';

const SocialPage = ({ location }) => {
  const params = qs.parse(location.search);
  console.log(params);

  return <div>Hello</div>;
};

export default SocialPage;
