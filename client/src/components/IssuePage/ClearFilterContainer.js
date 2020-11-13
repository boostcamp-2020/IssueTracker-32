import React, { useContext } from 'react';
import styled from 'styled-components';
import { FilterContext } from '@context/FilterContext';

const ClearContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 0px 15px 0px;
`;

const ClearButton = styled.button`
  border: none;
  border-radius: 14px;
  background-color: #495057;
  color: #ffffff;
  font-size: 17px;
`;

const ClearText = styled.p`
  padding: 0px 0px 0px 6px;
  color: #495057;
  font-weight: 600;
  font-size: 14px;
`;

const ClearFilterContainer = () => {
  const filterContext = useContext(FilterContext);

  return filterContext.isDefault === false ? (
    <ClearContainer>
      <ClearButton onClick={filterContext.makeDefault}> &times; </ClearButton>
      <ClearText onClick={filterContext.makeDefault}>
        Clear current search query, filters, and sorts
      </ClearText>
    </ClearContainer>
  ) : (
    <></>
  );
};

export default ClearFilterContainer;
