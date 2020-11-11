import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchIssues } from '@api';
import IssueFilterContainer from '@IssuePage/IssueFilterContainer';
import IssueListContainer from '@IssuePage/IssueListContainer';
import { FilterProvider } from '@context/FilterContext';

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
    <FilterProvider>
      <IssueFilterContainer />
      <IssueListContainer issueList={issueList} />
    </FilterProvider>
  );
};

export default IssuePage;
