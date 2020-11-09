import React, { useEffect } from 'react';
import styled from 'styled-components';
import LabelList from '../Common/LabelList';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #ced4da;
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const SubWrapper = styled.div`
  display: flex;
`;

const TitleText = styled.p`
  font-weight: 600;
`;
const SubText = styled.p``;

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
  const subText = makeSubText(id, isOpen, updatedTime, githubId);
  return (
    <ItemContainer>
      <TitleWrapper>
        <TitleText> {title} </TitleText>
        <LabelList labelList={labelList} />
      </TitleWrapper>
      <SubWrapper>
        <SubText> {subText} </SubText>
      </SubWrapper>
    </ItemContainer>
  );
};

export default IssueItem;
