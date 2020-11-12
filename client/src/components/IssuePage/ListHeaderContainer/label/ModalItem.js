import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { FilterContext } from '@context/FilterContext';

const ItemWrapper = styled.div`
  display: flex;
  border-top: solid 1px #dee2e6;
  padding: 6px;
`;

const ColorWrapper = styled.div`
  display: flex;
  padding: 0px 0px 0px 10px;
`;

const ColorCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 14px;
  background-color: #000000;
  background-color: ${(props) => props.colorStyle.backgroundColor};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 10px;
`;

const NameText = styled.p`
  font-weight: 600;
  font-size: 14px;
  margin: 0px 0px 5px 0px;
`;

const SubText = styled.p`
  font-size: 12px;
`;

const ModalItem = (props) => {
  const filterContext = useContext(FilterContext);

  const id = props.data.id;
  const color = props.data.color;
  const name = props.data.name;
  const description = props.data.description;

  const colorStyle = {
    backgroundColor: color,
  };

  const selectLabel = () => {
    filterContext.setLabel(id);
  };

  return (
    <ItemWrapper onClick={selectLabel}>
      <ColorWrapper>
        <ColorCircle colorStyle={colorStyle} />
      </ColorWrapper>
      <TextWrapper>
        <NameText> {name} </NameText>
        <SubText>{description} </SubText>
      </TextWrapper>
    </ItemWrapper>
  );
};

export default ModalItem;
