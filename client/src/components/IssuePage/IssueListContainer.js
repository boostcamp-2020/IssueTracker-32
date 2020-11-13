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
  const [issueList, setIssueList] = useFetchWithParams([], fetchIssuesWithData, filterContext);

  const updateIssuesData = async () => {
    const { data } = await fetchIssuesWithData(filterContext);
    setIssueList(data);
  };

  useEffect(() => {
    updateIssuesData();
  }, [filterContext.filterString]);

  return (
    <ListContainer>
      <IssueListHeader />
      <IssueList issueList={issueList} />
    </ListContainer>
  );
};

export default IssueListContainer;
