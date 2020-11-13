import React, { useEffect } from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: solid 1px #dee2e6;
  padding: 6px;
`;

const NameText = styled.p`
  font-weight: 500;
`;

const ModalItem = (props) => {
  return (
    <ItemWrapper>
      <NameText> test </NameText>
    </ItemWrapper>
  );
};

export default ModalItem;
