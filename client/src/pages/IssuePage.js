import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchIssues } from '../api';
import IssueFilterContainer from '../components/IssuePage/IssueFilterContainer';
import IssueListContainer from '../components/IssuePage/IssueListContainer';

const IssuePage = () => {
  const [issueList, setIssueList] = useState([]);
  useEffect(() => {
    const fetchIssueList = async () => {
      const { data } = await fetchIssues();
      const fetchedIssueList = data.data;
      setIssueList(fetchedIssueList);
      return;
    };
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
