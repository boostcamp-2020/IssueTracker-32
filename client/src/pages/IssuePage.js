import React from 'react';
import styled from 'styled-components';
import IssueFilterContainer from '@IssuePage/IssueFilterContainer';
import IssueListContainer from '@IssuePage/IssueListContainer';
import ClearFilterContainer from '@IssuePage/ClearFilterContainer';
import { FilterProvider } from '@context/FilterContext';

const IssuePage = () => {
  return (
    <FilterProvider>
      <IssueFilterContainer />
      <ClearFilterContainer />
      <IssueListContainer />
    </FilterProvider>
  );
};

export default IssuePage;
