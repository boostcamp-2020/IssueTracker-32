import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IssueFilterContainer from '../components/IssuePage/IssueFilterContainer';
import IssueListContainer from '../components/IssuePage/IssueListContainer';

const IssuePage = () => {
  const [issueList, setIssueList] = useState(dummyIssueList);

  useEffect(() => {}, []);

  return (
    <div>
      <IssueFilterContainer />
      <IssueListContainer issueList={issueList} />
    </div>
  );
};

export default IssuePage;
