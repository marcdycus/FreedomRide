import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';

const StyledButton = styled(Button)`
  background: none;
  display: flex;
  text-decoration: none;
  color: ${({ theme }) => theme['lightGray']};
  transition: 0.3s;

  &:hover:not([disabled]) {
    color: ${({ theme }) => theme['darkGray']};
    text-decoration: underline;
    transition: 0.3s;
  }
  &:disabled {
    color: ${({ theme }) => theme['lightGray']};
  }
`;

const StyledIconContainer = styled.div`
  margin: ${({ text, iconRight }) =>
    text ? (iconRight ? `0px 0px 0px 7px` : `0px 7px 0px 0px`) : `0px`};
`;

const StyledText = styled.span`
  visibility: ${({ $loading }) => $loading};
`;

const SecondaryButton = ({
  className,
  disabled,
  icon,
  iconRight,
  loading,
  submit,
  text,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      submit={submit}
      loading={loading}
      className={className}
      text={text}
    >
      {icon && !iconRight && !loading && (
        <StyledIconContainer text={text}>{icon}</StyledIconContainer>
      )}
      <StyledText $loading={loading}>{text}</StyledText>
      {iconRight && (
        <StyledIconContainer text={text} iconRight={true}>
          {icon}
        </StyledIconContainer>
      )}
    </StyledButton>
  );
};

SecondaryButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  icon: PropTypes.element,
  iconRight: PropTypes.bool,
  loading: PropTypes.bool,
  submit: PropTypes.func.isRequired,
  text: PropTypes.string,
};

SecondaryButton.defaultProps = {
  disabled: false,
  icon: undefined,
  loading: false,
  submit: undefined,
};

export default SecondaryButton;
