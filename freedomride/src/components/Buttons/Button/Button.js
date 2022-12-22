import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { LoadingDots } from '../../Lottie';

const StyledButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  border-radius: 3px;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-grow: 0;
  float: right;
  font-size: 16px;
  font-weight: 400;
  height: 44px;
  justify-content: center;
  line-height: 24px;
  order: 1;
  padding: 0px 16px;
  &:disabled {
    cursor: unset;
  }
  &:hover:not([disabled]) {
    cursor: pointer;
  }
`;

const onSubmit = (e, submit) => {
  submit(e);
};

function Button({ children, className, disabled, loading, submit, text }) {
  return (
    <StyledButton
      className={className}
      disabled={disabled}
      onClick={(e) => onSubmit(e, submit, text)}
    >
      {children}
      {loading && <LoadingDots />}
    </StyledButton>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  submit: PropTypes.func.isRequired,
  text: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  loading: false,
};

export default Button;
