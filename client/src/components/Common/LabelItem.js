import React, { useEffect } from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 3px;
  border-radius: 20px;
  background-color: ${(props) => props.colorStyle.backgroundColor};
`;

const NameText = styled.p`
  padding: 2px 5px;
  font-weight: 500;
`;

const LabelItem = (props) => {
  const id = props.label.id;
  const name = props.label.name;
  const color = props.label.color;

  const colorStyle = {
    backgroundColor: color,
  };

  return (
    <ItemWrapper colorStyle={colorStyle}>
      <NameText> {name} </NameText>
    </ItemWrapper>
  );
};

export default LabelItem;
