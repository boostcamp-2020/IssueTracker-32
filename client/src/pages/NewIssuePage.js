import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchIssues } from '../api';

import CommentFormContainer from '../components/NewIssuePage/CommentFormContainer';
import Sidebar from '../components/NewIssuePage/Sidebar';

const IssuePage = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const NewIssuePage = () => {
  return (
    <IssuePage>
      <CommentFormContainer />
      <Sidebar></Sidebar>
    </IssuePage>
  );
};

export default NewIssuePage;
