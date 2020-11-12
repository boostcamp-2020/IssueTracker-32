import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import IssueListHeader from '@IssuePage/IssueListHeader';
import IssueList from '@IssuePage/IssueList';
import { FilterContext } from '@context/FilterContext';
import { fetchIssuesWithData } from '@api';
import { useFetchWithParams } from '@hooks';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ced4da;
  border-radius: 7px;
  margin-bottom: 15px;
`;

const IssueListContainer = (props) => {
  const filterContext = useContext(FilterContext);
  console.log(filterContext);
  const [issueList, setIssueList] = useFetchWithParams([], fetchIssuesWithData, filterContext);
  console.log(issueList);
  return (
    <ListContainer>
      <IssueListHeader />
      <IssueList issueList={issueList} />
    </ListContainer>
  );
};

export default IssueListContainer;
