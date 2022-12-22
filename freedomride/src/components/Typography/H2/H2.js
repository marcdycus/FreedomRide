import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Constants } from '../Constants';

const Text = styled.span`
  margin: ${({ margin }) => margin};
  font-weight: 700;
  line-height: 31.2px;
  font-size: ${Constants.H2};
  color: ${({ theme, color }) => theme[color]};
`;

const H2 = ({ className, margin, color, children }) => {
  return (
    <Text className={className} margin={margin} color={color}>
      {children}
    </Text>
  );
};

H2.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.string,
};

H2.defaultProps = {
  margin: '0px',
  color: 'greyDark',
};

export default H2;
