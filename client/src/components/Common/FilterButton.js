import React, { useEffect } from 'react';
import styled from 'styled-components';
import { GoTriangleDown } from 'react-icons/go';

const FilterButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 0px 5px;
`;

const ButtonText = styled.p`
  color: #343a40;
  margin: 0px 5px;
`;

const FilterButton = (props) => {
  const name = props.name;
  return (
    <FilterButtonWrapper>
      <ButtonText> {name}</ButtonText>
      <GoTriangleDown />
    </FilterButtonWrapper>
  );
};

export default FilterButton;
