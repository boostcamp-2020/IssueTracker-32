import React, { useEffect } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
`;

const FilterWrapper = styled.div`
  flex: 1;
  display: flex;
  margin-right: 15px;
`;
const FilterButton = styled.button`
  padding: 7px 15px;
  border-color: #868e96;
  border-right: none;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  color: #343a40;
  font-weight: 600;
`;
const FilterTextInput = styled.input`
  flex: 1;
  border-color: #868e96;
  padding: 7px 15px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-right: 15px;
`;
const LabelButton = styled.button`
  padding: 7px 15px;
  border-color: #868e96;
  border-right: none;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  color: #343a40;
  font-weight: 600;
`;
const MilestoneButton = styled.button`
  padding: 7px 15px;
  border-color: #868e96;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  color: #343a40;
  font-weight: 600;
`;

const NewIssueButton = styled.button`
  padding: 7px 15px;
  border: none;
  border-radius: 7px;
  background-color: #2ea44f;
  color: white;
  font-weight: 600;
`;

const IssueFilterContainer = () => {
  return (
    <FilterContainer>
      <FilterWrapper>
        <FilterButton> Filter </FilterButton>
        <FilterTextInput></FilterTextInput>
      </FilterWrapper>
      <ButtonWrapper>
        <LabelButton> Labels </LabelButton>
        <MilestoneButton> Milestones </MilestoneButton>
      </ButtonWrapper>
      <NewIssueButton> New issue </NewIssueButton>
    </FilterContainer>
  );
};

export default IssueFilterContainer;
