import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import IssueDetailHeader from '../components/IssueDetailPage/IssueDetailHeader';
import IssueDetailContainer from '../components/IssueDetailPage/IssueDetailContainer';

const DetailPage = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const IssueDetailPage = () => {
  return (
    <DetailPage>
      <IssueDetailHeader/>
      <IssueDetailContainer/>
    </DetailPage>
  );
};

export default IssueDetailPage;
