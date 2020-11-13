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
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => makeTextColor(props.colorStyle.backgroundColor)};
`;

const makeTextColor = (backgroundString) => {
  const redColor = parseInt(backgroundString.substring(1, 3), 16);
  const greenColor = parseInt(backgroundString.substring(3, 5), 16);
  const blueColor = parseInt(backgroundString.substring(5, 7), 16);

  const luminance = (0.299 * redColor + 0.587 * greenColor + 0.114 * blueColor) / 255;
  return luminance > 0.5 ? '#000000' : '#ffffff';
};

const LabelItem = (props) => {
  const id = props.label.id;
  const name = props.label.name;
  const color = props.label.color;

  const colorStyle = {
    backgroundColor: color,
  };

  return (
    <ItemWrapper colorStyle={colorStyle}>
      <NameText colorStyle={colorStyle}> {name} </NameText>
    </ItemWrapper>
  );
};

export default LabelItem;
