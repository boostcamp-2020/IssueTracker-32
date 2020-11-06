import React, { useEffect } from 'react';
import styled from 'styled-components';

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

const makeSubText = (dummy) => {
  return dummy;
};

const IssueItem = (props) => {
  const id = props.issue.id;
  const isOpen = props.issue.isOpen;
  const title = props.issue.title;
  const subText = makeSubText(props.issue.user.github_id);
  return (
    <ItemContainer>
      <TitleWrapper>
        <TitleText> {title} </TitleText>
      </TitleWrapper>
      <SubWrapper>
        <SubText> {subText} </SubText>
      </SubWrapper>
    </ItemContainer>
  );
};

export default IssueItem;
