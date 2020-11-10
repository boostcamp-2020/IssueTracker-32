import React, { useEffect } from 'react';
import styled from 'styled-components';
import LabelList from '../Common/LabelList';
import MilestoneItem from '../Common/MilestoneItem';
import { GoIssueOpened, GoIssueClosed } from 'react-icons/go';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

const ItemContainer = styled.div`
  display: flex;
  border-top: 1px solid #ced4da;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  padding: 8px;
`;

const IconContainer = styled.div`
  display: flex;
  padding: 8px;
`;

const IssueIcon = (props) => {
  const isOpen = props.isOpen;
  return isOpen === true ? (
    <div style={{ color: 'green' }}>
      <GoIssueOpened />
    </div>
  ) : (
    <div style={{ color: 'red' }}>
      <GoIssueClosed />
    </div>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SubWrapper = styled.div`
  margin: 4px 0px 0px;
  display: flex;
  align-items: center;
`;

const TitleText = styled.p`
  font-weight: 600;
  font-size: 16px;
`;
const SubText = styled.p`
  color: #868e96;
  font-size: 12px;
`;

// time setting

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

const makeSubText = (issueId, isOpen, pastTime, githubId) => {
  const numberString = issueId;
  const stateString = isOpen === true ? 'opened' : 'closed';
  const pastDatetime = new Date(pastTime);
  const timeString = timeAgo.format(pastDatetime, 'round');
  const githubString = githubId;
  const subText = `#${numberString} ${stateString} ${timeString} by ${githubString}`;
  return subText;
};

const IssueItem = (props) => {
  console.log(props.issue);
  const id = props.issue.id;
  const isOpen = props.issue.is_open;
  const updatedTime = props.issue.updatedAt;
  const title = props.issue.title;
  const labelList = props.issue.labels;
  const githubId = props.issue.user.github_id;
  const milestone = props.issue.milestone;
  const subText = makeSubText(id, isOpen, updatedTime, githubId);
  return (
    <ItemContainer>
      <CheckBoxContainer></CheckBoxContainer>
      <IconContainer>
        <IssueIcon isOpen={isOpen} />
      </IconContainer>
      <MainContainer>
        <TitleWrapper>
          <TitleText> {title} </TitleText>
          <LabelList labelList={labelList} />
        </TitleWrapper>
        <SubWrapper>
          <SubText> {subText} </SubText>
          <MilestoneItem milestone={milestone} />
        </SubWrapper>
      </MainContainer>
    </ItemContainer>
  );
};

export default IssueItem;
