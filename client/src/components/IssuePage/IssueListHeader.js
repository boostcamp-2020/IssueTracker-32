import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterButton from '../Common/FilterButton';
import { fetchIssuesCount } from '@api';
import { GoIssueOpened, GoCheck } from 'react-icons/go';

const ListHeaderContainer = styled.div`
  padding: 16px;
  display: flex;
`;

const IssueCountWrapper = styled.div`
  display: flex;
`;

const FilterButtonListWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

const OpenCountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ClosedCountWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 0px 0px 10px;
`;

const CountText = styled.p`
  font-size: 16px;
  margin: 0px 0px 0px 5px;
`;
const IssueListHeader = (props) => {
  const [openCount, setOpenCount] = useState(0);
  const [closedCount, setClosedCount] = useState(0);

  const fetchAndSetIssuesCount = async () => {
    const { data } = await fetchIssuesCount();
    const { open, close } = data.data;
    setOpenCount(open);
    setClosedCount(close);
  };

  useEffect(() => {
    fetchAndSetIssuesCount();
  }, []);

  return (
    <ListHeaderContainer>
      <IssueCountWrapper>
        <OpenCountWrapper>
          <GoIssueOpened />
          <CountText> {openCount} Open </CountText>
        </OpenCountWrapper>
        <ClosedCountWrapper>
          <GoCheck />
          <CountText> {closedCount} Closed </CountText>
        </ClosedCountWrapper>
      </IssueCountWrapper>
      <FilterButtonListWrapper>
        <FilterButton name="Author" />
        <FilterButton name="Label" />
        <FilterButton name="Projects" />
        <FilterButton name="Milestones" />
        <FilterButton name="Assignee" />
      </FilterButtonListWrapper>
    </ListHeaderContainer>
  );
};

export default IssueListHeader;
