import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AuthorFilterButton from '@IssuePage/ListHeaderContainer/author/FilterButton';
// import LabelFilterButton from '@IssuePage/ListHeaderContainer/label/FilterButton';
// import ProjectFilterButton from '@IssuePage/ListHeaderContainer/project/FilterButton';
// import MilestoneFilterButton from '@IssuePage/ListHeaderContainer/milestone/FilterButton';
// import AssigneeFilterButton from '@IssuePage/ListHeaderContainer/assignee/FilterButton';

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
        <AuthorFilterButton />
        {/* <LabelFilterButton />
        <ProjectFilterButton />
        <MilestoneFilterButton />
        <AssigneeFilterButton /> */}
      </FilterButtonListWrapper>
    </ListHeaderContainer>
  );
};

export default IssueListHeader;
