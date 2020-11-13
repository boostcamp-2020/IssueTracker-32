import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { GoTriangleDown } from 'react-icons/go';
import Modal from 'react-modal';
import ModalContainer from './ModalContainer';

const FilterButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 0px 3px;
`;

const ButtonText = styled.p`
  color: #343a40;
  margin: 0px 5px;
`;

const FilterButton = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const buttonElement = useRef(null);
  const [topLocation, setTopLocation] = useState(0);
  const [rightLocation, setRightLocation] = useState(0);

  const name = props.name;

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const setTopRightLocation = (bottom, right) => {
    setTopLocation(bottom);
    setRightLocation(right);
  };

  const customModalStyles = {
    overlay: {
      backgroundColor: 'none',
    },
    content: {
      top: `${topLocation}px`,
      left: 'auto',
      right: `calc(100% - ${rightLocation}px)`,
      bottom: 'auto',
      padding: '0px',
    },
  };

  useEffect(() => {
    const { bottom, right } = buttonElement.current.getBoundingClientRect();
    setTopRightLocation(bottom, right);
  }, []);
  return (
    <div>
      <FilterButtonWrapper ref={buttonElement} onClick={openModal}>
        <ButtonText> {name}</ButtonText>
        <GoTriangleDown />
      </FilterButtonWrapper>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customModalStyles}>
        <ModalContainer closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default FilterButton;
