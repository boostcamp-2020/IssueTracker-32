import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchIssues } from '../api';
import IssueFilterContainer from '../components/IssuePage/IssueFilterContainer';
import IssueListContainer from '../components/IssuePage/IssueListContainer';

const IssuePage = () => {
  const [issueList, setIssueList] = useState([]);
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
      <IssueListContainer issueList={issueList} />
    </div>
  );
};

export default IssuePage;
