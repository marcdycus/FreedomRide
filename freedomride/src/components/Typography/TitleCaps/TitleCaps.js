import React from 'react';

import styled from 'styled-components';

import { Constants } from '../Constants';

const Text = styled.span`
  margin: 0;
  font-weight: 400;
  font-size: ${Constants.caps};
  line-height: 15.6px;
  color: ${({ theme, disabled }) =>
    disabled ? theme['greySecondaryMedium'] : theme['greyDark']};
  text-transform: uppercase;
`;

const TitleCaps = ({ className, children, disabled }) => {
  return (
    <Text className={className} disabled={disabled}>
      {children}
    </Text>
  );
};

export default TitleCaps;
