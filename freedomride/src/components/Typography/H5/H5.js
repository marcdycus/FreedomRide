import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Constants } from '../Constants';

const Text = styled.span`
  margin: ${({ margin }) => margin};
  font-weight: 700;
  font-size: ${Constants.H5};
  line-height: 21.6px;
  color: ${({ theme, color }) => theme[color]};
`;

const H5 = ({ className, margin, color, children }) => {
  return (
    <Text className={className} margin={margin} color={color}>
      {children}
    </Text>
  );
};

H5.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.string,
};

H5.defaultProps = {
  margin: '0px',
  color: 'greyDark',
};

export default H5;
