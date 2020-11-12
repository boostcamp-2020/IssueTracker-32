import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { FilterContext } from '@context/FilterContext';

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: solid 1px #dee2e6;
  padding: 6px;
`;

const MainText = styled.p`
  margin: 0px 0px 0px 10px;
  font-weight: 500;
`;

const CancelFilterButton = (props) => {
  const filterContext = useContext(FilterContext);
  const cancelInfoString = 'not use label filtering';

  const selectCancel = () => {
    filterContext.setLabel(null);
  };

  return (
    <ItemWrapper onClick={selectCancel}>
      <MainText> {cancelInfoString} </MainText>
    </ItemWrapper>
  );
};

export default CancelFilterButton;
