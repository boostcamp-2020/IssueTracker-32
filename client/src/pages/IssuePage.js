import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchIssues } from '@api';
import IssueFilterContainer from '@IssuePage/IssueFilterContainer';
import IssueListContainer from '@IssuePage/IssueListContainer';

const IssuePage = () => {
  const [issueList, setIssueList] = useState([]);

  const fetchIssueList = async () => {
    const { data } = await fetchIssues();
    const fetchedIssueList = data.data;
    setIssueList(fetchedIssueList);
    return;
  };

  useEffect(() => {
    fetchIssueList();
  }, []);

  return (
    <div>
      <IssueFilterContainer />
      <IssueListContainer issueList={issueList} />
    </div>
  );
};

export default IssuePage;
