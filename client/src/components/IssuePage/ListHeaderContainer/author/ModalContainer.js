import React, { useEffect } from 'react';
import styled from 'styled-components';
import ModalList from './ModalList';
import { fetchUsers } from '@api';
import { useFetch } from '@hooks';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
`;

const HeaderText = styled.p`
  font-weight: 600;
`;

const CancelButton = styled.button`
  margin-left: auto;
  border: none;
  padding: 0px;
  background-color: #ffffff;
  font-size: 16px;
`;

const ModalFilterWrapper = styled.div`
  border-top: solid 1px #dee2e6;
  padding: 6px;
`;

const ModalFilterInputBox = styled.input`
  width: 230px;
`;

const ModalContainer = (props) => {
  const [userList, setUserList] = useFetch([], fetchUsers);

  const headerText = 'Filter by author';
  const placeHolder = 'Filter users';
  const closeModal = props.closeModal;
  return (
    <ModalWrapper>
      <ModalHeaderWrapper>
        <HeaderText> {headerText}</HeaderText>
        <CancelButton onClick={closeModal}> &times; </CancelButton>
      </ModalHeaderWrapper>
      <ModalFilterWrapper>
        <ModalFilterInputBox placeholder={placeHolder} />
      </ModalFilterWrapper>
      <ModalList dataList={userList} />
    </ModalWrapper>
  );
};

export default ModalContainer;
