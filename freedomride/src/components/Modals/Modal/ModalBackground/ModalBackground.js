import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { useLockBodyScroll } from 'hooks';

const StyledBackground = styled.div`
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  padding: 1em;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1040;
`;

const ModalBackground = ({ modalClose }) => {
  // useLockBodyScroll();
  return <StyledBackground onClick={() => modalClose()} />;
};

ModalBackground.propTypes = {
  modalClose: PropTypes.func.isRequired,
};

export default ModalBackground;
