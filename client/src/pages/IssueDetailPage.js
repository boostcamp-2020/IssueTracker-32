import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import IssueDetailHeader from '../components/IssueDetailPage/IssueDetailHeader';
import IssueDetailContainer from '../components/IssueDetailPage/IssueDetailContainer';
import { fetchIssueDetail } from '../api';

const DetailPage = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const IssueDetailPage = ({ match }) => {
  const { issueId } = match.params;

  const [issueData, setIssueData] = useState([]);

  const fetchIssueData = async () => {
    const { data } = await fetchIssueDetail(issueId);
    const fetchedIssueData = data.data[0];
    setIssueData(fetchedIssueData);
    return;
  };

  useEffect(() => {
    fetchIssueData();
  }, []);

  return (
    <DetailPage>
      <IssueDetailHeader issueData={issueData}/>
      <IssueDetailContainer issueData={issueData}/>
    </DetailPage>
  );
};

export default IssueDetailPage;
