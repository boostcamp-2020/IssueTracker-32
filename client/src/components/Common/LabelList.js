import React, { useEffect } from 'react';
import styled from 'styled-components';
import LabelItem from './LabelItem';

const LabelListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LabelList = (props) => {
  const labelList = props.labelList;
  return (
    <LabelListContainer>
      {labelList.map((label, i) => {
        return <LabelItem label={label} />;
      })}
    </LabelListContainer>
  );
};

export default LabelList;
