import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Header = styled.div`
  margin-bottom: 20px;
`;

const CommentTitle = styled.p`
  font-size: 40px;
`

const IssueDetailHeader = (props) => {
  const issueData = props.issueData;

  return (
    <Header>
      <CommentTitle>{issueData.title}</CommentTitle>
    </Header>
  );
};

export default IssueDetailHeader;
