import React, { useEffect } from 'react';
import styled from 'styled-components';

const ListHeaderContainer = styled.div`
  display: flex;
`;

const FilterButtonWrapper = styled.div`
  display: flex;
  padding: 20px 15px;
  margin-left: auto;
`;

const AuthorFilterButton = styled.button`
  border: none;
  color: #343a40;
`;

const LabelFilterButton = styled.button`
  border: none;
  color: #343a40;
`;

const ProjectsFilterButton = styled.button`
  border: none;
  color: #343a40;
`;

const MilestonesFilterButton = styled.button`
  border: none;
  color: #343a40;
`;

const AssigneeFilterButton = styled.button`
  border: none;
  color: #343a40;
`;

const IssueListHeader = (props) => {
  return (
    <ListHeaderContainer>
      <FilterButtonWrapper>
        <AuthorFilterButton> Author </AuthorFilterButton>
        <LabelFilterButton> Label </LabelFilterButton>
        <ProjectsFilterButton> Projects </ProjectsFilterButton>
        <MilestonesFilterButton> Milestones </MilestonesFilterButton>
        <AssigneeFilterButton> Assignee </AssigneeFilterButton>
      </FilterButtonWrapper>
    </ListHeaderContainer>
  );
};

export default IssueListHeader;
