import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme['navyBlue']};
  color: ${({ theme }) => theme['lightGray']};
  width: ${({ width }) => (width ? width + 'px' : 'auto')};
  transition: 0.3s;

  &:hover:not([disabled]) {
    background: ${({ theme }) => theme['lightGray']};
    color: ${({ theme }) => theme['darkGray']};
    transition: 0.3s;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.greyLight};
    border: 1.5px solid ${({ theme }) => theme.greySecondaryLight};
    color: ${({ theme }) => theme.greyMedium};
  }
`;

const StyledIconContainer = styled.div``;

const StyledText = styled.span`
  margin: ${({ icon, iconRight }) =>
    icon ? (iconRight ? `0px 7px 0px 0px` : `0px 0px 0px 7px`) : `0px`};
  visibility: ${({ loading }) => (loading ? 'hidden' : 'visible')};
`;

function PrimaryButton({
  className,
  disabled,
  loading,
  submit,
  icon,
  iconRight,
  text,
  width,
}) {
  return (
    <StyledButton
      className={className}
      disabled={disabled || loading}
      loading={loading}
      submit={submit}
      width={width}
      text={text}
    >
      {icon && !iconRight && <StyledIconContainer>{icon}</StyledIconContainer>}
      <StyledText
        text={text}
        icon={icon}
        iconRight={iconRight}
        loading={loading ? 1 : 0}
      >
        {text}
      </StyledText>
      {icon && iconRight && <StyledIconContainer>{icon}</StyledIconContainer>}
    </StyledButton>
  );
}

PrimaryButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  icon: PropTypes.element,
  iconRight: PropTypes.bool,
  loading: PropTypes.bool,
  submit: PropTypes.func.isRequired,
  text: PropTypes.string,
  width: PropTypes.string,
};

PrimaryButton.defaultProps = {
  disabled: false,
  icon: undefined,
  loading: false,
  submit: false,
  width: undefined,
};

export default PrimaryButton;
