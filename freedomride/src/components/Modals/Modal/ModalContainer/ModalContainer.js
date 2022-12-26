import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import ModalBackground from '../ModalBackground';

const StyledModal = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  flex-direction: column;
  display: block;
  align-items: center;
  width: 512px;
  block-size: fit-content;
  top: 50%;
  left: 50%;
  border-radius: 5px 5px 5px 5px;
  background-color: ${({ theme }) => theme.white};
  z-index: 2000;
  padding: 16px;
  overflow-y: visible;
`;

const ModalContainer = ({ children, className, modalClose, modalState }) => {
  if (!modalState) return <></>;
  return (
    <div className={className}>
      <StyledModal>{children}</StyledModal>
      <ModalBackground modalClose={modalClose} />
    </div>
  );
};

ModalContainer.propTypes = {
  modalClose: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired,
};

ModalContainer.displayName = 'ModalContainer';

export default ModalContainer;
