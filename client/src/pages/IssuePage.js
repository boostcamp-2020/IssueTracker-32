import React, { useEffect } from 'react';
import styled from 'styled-components';
import { testAPI } from '../api';
import IssueFilterContainer from '../components/IssuePage/IssueFilterContainer';

const IssuePage = () => {
  useEffect(() => {
    const fetch = async () => {
      return await testAPI();
    };
    const data = fetch();
    console.log(data);
  }, []);

  return (
    <div>
      <IssueFilterContainer />
    </div>
  );
};

export default IssuePage;
