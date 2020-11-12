import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import CommentList from './CommentList';
import IssueDetailSidebar from './IssueDetailSidebar';

const Container = styled.div`
  display: flex;
`;

const IssueDetailContainer = (props) => {
  const issueData = props.issueData;

  return (
    <Container>
      <CommentList issueData={issueData}/>
      <IssueDetailSidebar issueData={issueData}/>
    </Container>
  );
};

export default IssueDetailContainer;
