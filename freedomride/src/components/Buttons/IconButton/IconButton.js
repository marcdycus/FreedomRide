import React from 'react';

import styled from 'styled-components';

const ButtonContainer = styled.button`
  background: transparent;
  border: none;
  position: relative;
  z-index: auto;
  &:hover([disabled]) {
    cursor: no-drop;
  }
  &:hover:not([disabled]) {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const IconButton = (props) => {
  const { children } = props;
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

IconButton.displayName = 'IconButton';

export default IconButton;
