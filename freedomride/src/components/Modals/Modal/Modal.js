import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { PrimaryButton, SecondaryButton } from '../../Buttons';
import ModalContainer from './ModalContainer';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
// import { Toast, useToast } from 'components/Notifications/Toast';

// import analytics from 'utils/Analytics/segment';

const StyledModalBody = styled.div`
  display: flex;
  align-items: left;
  justify-content: flex-start;
  flex-direction: column;
`;

const StyledFooterSection = styled.div`
  align-items: flex-end;
`;

const Modal = ({
  children,
  className = null,
  modalClose,
  modalState,
  modalSubTitle = null,
  modalTitle,
  modalType = null,
  primaryAction = null,
  primaryButtonClassName = '',
  primaryDisabled = false,
  primaryFormId = '',
  primaryLoading = false,
  primaryState = true,
  primaryText = 'Submit',
  secondaryAction = null,
  secondaryButtonClassName = '',
  secondaryState = true,
  secondaryText = 'Cancel',
  submitOnEnter = false,
  tertiaryAction = null,
  tertiaryButtonClassName = '',
  tertiaryDisabled = false,
  tertiaryState = false,
  tertiaryText = 'Delete',
  tertiaryToastText = '',
  toastErrorText = 'Something went wrong. Please try again.',
  toastText = 'Success',
}) => {
  // const { toastActive, makeToast } = useToast(false);
  // const [toastObj, setToastObj] = React.useState();

  // const handleToast = (responseError, type) => {
  //   const text = type === 'primary' ? toastText : tertiaryToastText;
  //   if (responseError !== undefined) {
  //     setToastObj({
  //       error: responseError,
  //       text: responseError ? toastErrorText : text,
  //     });
  //     makeToast();
  //   }
  // };

  const handleSubmit = async (e) => {
    // if primaryAction has a callback responseError won't be undefined and will show the toast if not it won't show the toast
    // const responseError = await primaryAction(e);
    // handleToast(responseError, 'primary');
  };

  const handleTertiaryAction = async (e) => {
    // if tertiaryAction has a callback responseError won't be undefined and will show the toast if not it won't show the toast
    // const responseError = await tertiaryAction(e);
    // handleToast(responseError, 'tertiary');
  };

  // React.useEffect(() => {
  //   modalState && analytics.track(`open_modal_${modalTitle}`);
  // }, [modalState]);

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <>
      {/* {toastActive && <Toast error={toastObj.error} text={toastObj.text} />} */}
      <ModalContainer
        className={className}
        modalState={modalState}
        modalClose={modalClose}
      >
        <ModalHeader
          modalClose={modalClose}
          modalSubtitle={modalSubTitle}
          modalTitle={modalTitle}
          modalType={modalType}
        />
        <StyledModalBody
          onKeyDown={(e) => {
            submitOnEnter && handleKeyPress(e);
          }}
        >
          {children}
        </StyledModalBody>
        <ModalFooter>
          <StyledFooterSection>
            {tertiaryState && (
              <SecondaryButton
                className={tertiaryButtonClassName}
                text={tertiaryText}
                submit={tertiaryAction ? handleTertiaryAction : modalClose}
                disabled={tertiaryDisabled}
              />
            )}
          </StyledFooterSection>
          <StyledFooterSection>
            {primaryState && (
              <PrimaryButton
                className={primaryButtonClassName}
                disabled={primaryDisabled}
                form={primaryFormId}
                loading={primaryLoading ? true : null}
                submit={handleSubmit}
                text={primaryText}
              />
            )}
            {secondaryState && (
              <SecondaryButton
                className={secondaryButtonClassName}
                submit={secondaryAction ? secondaryAction : modalClose}
                text={secondaryText}
              />
            )}
          </StyledFooterSection>
        </ModalFooter>
      </ModalContainer>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  modalClose: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired,
  modalSubTitle: PropTypes.string,
  modalTitle: PropTypes.string.isRequired,
  modalType: PropTypes.oneOf(['BULK']),
  primaryAction: PropTypes.func,
  primaryDisabled: PropTypes.bool,
  primaryFormId: PropTypes.string,
  primaryLoading: PropTypes.bool,
  primaryState: PropTypes.bool,
  primaryText: PropTypes.string,
  secondaryAction: PropTypes.func,
  secondaryState: PropTypes.bool,
  secondaryText: PropTypes.string,
  submitOnEnter: PropTypes.bool,
  tertiaryAction: PropTypes.func,
  tertiaryState: PropTypes.bool,
  tertiaryText: PropTypes.string,
  tertiaryToastText: PropTypes.string,
  toastError: PropTypes.bool,
  toastErrorText: PropTypes.string,
  toastText: PropTypes.string,
};

export default Modal;
