import React from 'react';

import styled from 'styled-components';

const StyledError = styled.p`
  color: red;
  max-width: 100%;
  font-size: 16px;
  display: block;
  line-height: 1.2;
  text-align: right;
  padding-top: 5px;
`;

const Error = (props) => {
  return <StyledError {...props}>{props.children}</StyledError>;
};

export default Error;
