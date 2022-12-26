import React from 'react';

import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 0;
  .tertiary {
    margin-right: auto;
  }
`;
const ModalFooter = ({ children }) => {
  return (
    <>
      <ButtonContainer>{children}</ButtonContainer>
    </>
  );
};

export default ModalFooter;
