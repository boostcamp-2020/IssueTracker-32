import React from 'react';
import styled from 'styled-components';
import IssueFilterContainer from '@IssuePage/IssueFilterContainer';
import IssueListContainer from '@IssuePage/IssueListContainer';
import { FilterProvider } from '@context/FilterContext';

const IssuePage = () => {
  return (
    <FilterProvider>
      <IssueFilterContainer />
      <IssueListContainer />
    </FilterProvider>
  );
};

export default IssuePage;
