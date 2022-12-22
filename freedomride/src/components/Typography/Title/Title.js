import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Constants } from '../Constants';

const Text = styled.span`
  margin: ${({ margin }) => margin};
  font-weight: 700;
  font-size: ${Constants.title};
  line-height: 24px;
  color: ${({ theme, color }) => theme[color]};
`;

const Title = ({ className, margin, color, children }) => {
  return (
    <Text className={className} margin={margin} color={color}>
      {children}
    </Text>
  );
};

Title.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.string,
};

Title.defaultProps = {
  margin: '0px',
  color: 'greyDark',
};

export default Title;
