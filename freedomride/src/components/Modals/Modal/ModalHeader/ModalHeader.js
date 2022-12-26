import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { IconButton } from '../../../Buttons';
import { H4, Label } from '../../../Typography';

const StyledModalHeader = styled.div`
  width: 100%;
  margin-bottom: 0;
`;

const StyledRow = styled.div`
  display: flex;
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledX = styled.span`
  height: 16px;
  width: 16px;
  top: 25%;
`;

const StyledIconButton = styled(IconButton)`
  margin-left: auto;
  padding: 0;
  top: 20%;
`;

const StyledLabel = styled(Label)`
  color: ${({ theme }) => theme['greyMedium']};
`;

const ModalHeader = ({ modalClose, modalSubtitle, modalTitle, modalType }) => {
  return (
    <StyledModalHeader>
      <StyledRow>
        <StyledTitle>
          <H4 className="title">{modalTitle}</H4>
          {modalSubtitle && <StyledLabel>{modalSubtitle}</StyledLabel>}
        </StyledTitle>
        <StyledIconButton onClick={modalClose}>
          <StyledX color={'greySecondaryDark'}>X</StyledX>
        </StyledIconButton>
      </StyledRow>
    </StyledModalHeader>
  );
};

ModalHeader.propTypes = {
  modalClose: PropTypes.func.isRequired,
  modalSubtitle: PropTypes.string,
  modalTitle: PropTypes.string.isRequired,
  modalType: PropTypes.oneOf(['BULK']),
};

export default ModalHeader;
