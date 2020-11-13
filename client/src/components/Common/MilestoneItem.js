import React, { useEffect } from 'react';
import styled from 'styled-components';
import { GoMilestone } from 'react-icons/go';

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 3px;
`;

const NameText = styled.p`
  padding: 0px 5px;
  color: #868e96;
  font-size: 12px;
`;

const MilestoneItem = (props) => {
  const milestone = props.milestone;
  return milestone != undefined ? (
    <ItemWrapper>
      <GoMilestone size={12} />
      <NameText> {milestone.title} </NameText>
    </ItemWrapper>
  ) : (
    <></>
  );
};

export default MilestoneItem;
