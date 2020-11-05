import React, { useEffect } from 'react';
import styled from 'styled-components';
import { fetchIssues } from '../api';
import IssueFilterContainer from '../components/IssuePage/IssueFilterContainer';

const IssuePage = () => {
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchIssues();
      console.log(data);
      return data;
    };

    fetch();
  }, []);

  return (
    <div>
      <IssueFilterContainer />
    </div>
  );
};

export default IssuePage;
