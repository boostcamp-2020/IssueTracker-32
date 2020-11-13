import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommentFormContainer from '@NewIssuePage/CommentFormContainer';
import Sidebar from '@NewIssuePage/Sidebar';
import { NewIssueProvider } from '@context/NewIssueContext';

const NewIssueContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const NewIssuePage = () => {

  return (
    <NewIssueProvider>
      <NewIssueContainer>
        <CommentFormContainer />
        <Sidebar></Sidebar>
      </NewIssueContainer>
    </NewIssueProvider>
  );
};

export default NewIssuePage;
