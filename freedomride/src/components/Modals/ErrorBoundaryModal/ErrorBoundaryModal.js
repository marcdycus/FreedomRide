import React from 'react';

import PropTypes from 'prop-types';

import Modal from '../Modal';
import { Body } from '../../Typography';

const ErrorBoundaryModal = ({
  bodyText = 'Something went wrong. Please try again or report an issue.',
  modalClose,
  modalState,
}) => {
  return (
    <Modal
      modalClose={modalClose}
      modalState={modalState}
      modalTitle="Oh Snap!"
      primaryAction={modalClose}
      primaryText="Okay"
      secondaryState={false}
    >
      <Body>{bodyText}</Body>
    </Modal>
  );
};

ErrorBoundaryModal.propTypes = {
  bodyText: PropTypes.string,
  modalState: PropTypes.bool.isRequired,
  modalClose: PropTypes.func.isRequired,
};

export default ErrorBoundaryModal;
