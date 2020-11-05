import React, { useEffect } from 'react';
import styled from 'styled-components';
import IssueListHeader from './IssueListHeader';
import IssueList from './IssueList';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ced4da;
  border-radius: 7px;
  margin-bottom: 15px;
`;

const IssueListContainer = (props) => {
  const issueList = props.issueList;

  return (
    <ListContainer>
      <IssueListHeader />
      <IssueList issueList={issueList} />
    </ListContainer>
  );
};

export default IssueListContainer;
