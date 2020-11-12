import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { fetchLabelsCount, fetchMilestonesCount } from '@api';
import { FilterContext } from '@context/FilterContext';
import { GoTriangleDown, GoTag, GoMilestone } from 'react-icons/go';
import { useFetch } from '@hooks';

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
`;

const FilterWrapper = styled.div`
  flex: 1;
  display: flex;
  margin-right: 15px;
`;
const FilterButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 16px;
  border: 1px solid #ced4da;
  border-right: none;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  background-color: #dee2e6;
  font-weight: 600;
`;
const FilterTextInput = styled.input`
  flex: 1;
  border: 1px solid #ced4da;
  padding: 7px 15px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-right: 15px;
`;
const LabelButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 16px;
  border: 1px solid #ced4da;
  border-right: none;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  font-weight: 600;
`;

const MilestoneButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 16px;
  border: 1px solid #ced4da;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  font-weight: 600;
`;

const ButtonText = styled.p`
  color: #343a40;
  margin: 0px 5px;
`;

const NewIssueButton = styled.button`
  padding: 5px 16px;
  border: none;
  border-radius: 7px;
  background-color: #2ea44f;
  color: white;
  font-weight: 600;
`;

const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dee2e6;
  padding: 2px 7px;
  border-radius: 10px;
`;

const CountText = styled.p`
  font-size: 12px;
`;

const IssueFilterContainer = () => {
  const filterContext = useContext(FilterContext);

  const [labelsCount, setLabelsCount] = useFetch(0, fetchLabelsCount);
  const [milestonesCount, setMilestonesCount] = useFetch(0, fetchMilestonesCount);

  useEffect(() => {}, []);

  return (
    <FilterContainer>
      <FilterWrapper>
        <FilterButtonWrapper>
          <ButtonText>Filter</ButtonText>
          <GoTriangleDown />
        </FilterButtonWrapper>
        <FilterTextInput placeholder={filterContext.filterString} />
      </FilterWrapper>
      <ButtonWrapper>
        <LabelButtonWrapper>
          <GoTag />
          <ButtonText>Labels</ButtonText>
          <CountWrapper>
            <CountText> {labelsCount} </CountText>
          </CountWrapper>
        </LabelButtonWrapper>
        <MilestoneButtonWrapper>
          <GoMilestone />
          <ButtonText>Milestones</ButtonText>
          <CountWrapper>
            <CountText> {milestonesCount} </CountText>
          </CountWrapper>
        </MilestoneButtonWrapper>
      </ButtonWrapper>
      <NewIssueButton> New issue </NewIssueButton>
    </FilterContainer>
  );
};

export default IssueFilterContainer;
