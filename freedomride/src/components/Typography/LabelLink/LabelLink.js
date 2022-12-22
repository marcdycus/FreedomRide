import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Constants } from '../Constants';

const Text = styled.span`
  margin: ${({ margin }) => margin};
  font-weight: 500;
  font-size: ${Constants.labelLink};
  line-height: 15.6px;
  color: ${({ theme, color }) => theme[color]};
`;

const LabelLink = ({ className, margin, color, children }) => {
  return (
    <Text className={className} margin={margin} color={color}>
      {children}
    </Text>
  );
};

LabelLink.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.string,
};

LabelLink.defaultProps = {
  margin: '0px',
  color: 'greyDark',
};

export default LabelLink;
