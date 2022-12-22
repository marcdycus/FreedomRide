import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Constants } from '../Constants';

const Text = styled.span`
  margin: ${({ margin }) => margin};
  line-height: 23px;
  font-weight: 700;
  font-size: ${Constants.H3};
  color: ${({ theme, color }) => theme[color]};
`;

const H3 = ({ className, margin, color, children }) => {
  return (
    <Text className={className} margin={margin} color={color}>
      {children}
    </Text>
  );
};

H3.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.string,
};

H3.defaultProps = {
  margin: '0px',
  color: 'greyDark',
};

export default H3;
