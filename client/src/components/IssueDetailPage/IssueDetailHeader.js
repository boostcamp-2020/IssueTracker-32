import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Header = styled.div`
  margin-bottom: 20px;
`;

const CommentTitle = styled.p`
  font-size: 40px;
`

const IssueDetailHeader = () => {
  return (
    <Header>
      <CommentTitle>[UI] Issue 상세정보 조회 페이지 구현</CommentTitle>
    </Header>
  );
};

export default IssueDetailHeader;
