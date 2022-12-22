import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Constants } from '../Constants';

const Text = styled.span`
  margin: ${({ margin }) => margin};
  font-weight: 400;
  font-size: ${Constants.body};
  line-height: 1.5;
  color: ${({ theme, color }) => theme[color]};
`;

const Body = ({ className, margin, color, children, onClick }) => {
  return (
    <Text className={className} margin={margin} color={color} onClick={onClick}>
      {children}
    </Text>
  );
};

Body.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.string,
};

Body.defaultProps = {
  margin: '0px',
  color: 'greyDark',
};

export default Body;
