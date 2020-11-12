import React, { useEffect } from 'react';
import styled from 'styled-components';
import ModalItem from '@Common/ModalItem';

const ModalListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalList = (props) => {
  const dataList = props.dataList;
  return (
    <ModalListContainer>
      {dataList.map((data, i) => {
        return <ModalItem data={data} />;
      })}
    </ModalListContainer>
  );
};

export default ModalList;
