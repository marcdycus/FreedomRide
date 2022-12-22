import React from 'react';

import { Player } from '@lottiefiles/react-lottie-player';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import loadingDots from '../../assets/lottie/loading-dots.json';

const StyledLottieContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

const Lottie = ({ height, setLottie, src, width }) => {
  return (
    <Player
      lottieRef={(instance) => {
        setLottie({ lottie: instance });
      }}
      autoplay={true}
      loop={true}
      controls={true}
      src={src}
      style={{ height: `${height}px`, width: `${width}px` }}
    ></Player>
  );
};

Lottie.propTypes = {
  height: PropTypes.number.isRequired,
  setLottie: PropTypes.func.isRequired,
  src: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
};

const LoadingDots = ({ className, height = 44, width = 12 }) => {
  const [lottie, setLottie] = React.useState(null);
  React.useEffect(() => {}, [lottie]);

  return (
    <StyledLottieContainer className={className}>
      <Lottie
        lottie={lottie}
        height={height}
        setLottie={setLottie}
        src={loadingDots}
        width={width}
      />
    </StyledLottieContainer>
  );
};

export { LoadingDots };
