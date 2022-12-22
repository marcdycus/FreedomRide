import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Constants } from '../Constants';

const Text = styled.span`
  margin: ${({ margin }) => margin};
  font-size: ${({ size }) => size};
  line-height: ${({ height }) => height};
  font-weight: ${({ weight }) => weight};
  color: ${({ theme, color }) => theme[color]};
`;

const Label = (props) => {
  return <Text {...props}>{props.children}</Text>;
};

Label.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
};

Label.defaultProps = {
  margin: '0px',
  color: 'greyDark',
  weight: '400',
  height: '16px',
  size: Constants.label,
};

export default Label;
