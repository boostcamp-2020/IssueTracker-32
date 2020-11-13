import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { FilterContext } from '@context/FilterContext';

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: solid 1px #dee2e6;
  padding: 6px;
`;

const NameText = styled.p`
  margin: 0px 0px 0px 10px;
  font-weight: 500;
`;

const ModalItem = (props) => {
  const filterContext = useContext(FilterContext);
  const id = props.data.id;
  const title = props.data.title;

  const selectMilestone = () => {
    filterContext.setMilestone(title);
  };

  return (
    <ItemWrapper onClick={selectMilestone}>
      <NameText> {title} </NameText>
    </ItemWrapper>
  );
};

export default ModalItem;
