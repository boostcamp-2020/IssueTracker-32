import React, { useEffect } from 'react';
import styled from 'styled-components';
import FilterButton from '../Common/FilterButton';

const ListHeaderContainer = styled.div`
  display: flex;
`;

const FilterButtonListWrapper = styled.div`
  display: flex;
  padding: 20px 15px;
  margin-left: auto;
`;

const IssueListHeader = (props) => {
  return (
    <ListHeaderContainer>
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
