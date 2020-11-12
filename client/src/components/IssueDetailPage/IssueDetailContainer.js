import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import CommentList from './CommentList';
import IssueDetailSidebar from './IssueDetailSidebar';

const Container = styled.div`
  display: flex;
`;

const IssueDetailContainer = () => {
  return (
    <Container>
      <CommentList/>
      <IssueDetailSidebar/>
    </Container>
  );
};

export default IssueDetailContainer;
