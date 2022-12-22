import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Constants } from '../Constants';

const Text = styled.span`
  margin: ${({ margin }) => (margin ? margin : '5px 0')};
  font-weight: 700;
  font-size: ${Constants.H4};
  line-height: 24px;
  color: ${({ theme, color }) => theme[color]};
  display: inline-block;
`;

const H4 = ({ className, margin, color, children }) => {
  return (
    <Text className={className} margin={margin} color={color}>
      {children}
    </Text>
  );
};

H4.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.string,
};

H4.defaultProps = {
  margin: '0px',
  color: 'greyDark',
};

export default H4;
