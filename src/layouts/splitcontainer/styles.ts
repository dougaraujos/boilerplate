/**
 * IMPORTS
 */
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { devices } from 'styles/devices';


/**
 * I am a styled banner.
 */
const $Banner = styled.div`
  background: url('/assets/images/banner-login.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;


/**
 * I am a styled container.
 */
const $Container = styled.div`
  display: flex;
  align-items: stretch;
  border-radius: 20px;
  overflow: hidden;
  flex: 1;
  max-width: 80vw;

  @media ${devices.laptop} {
    max-width: none;
  }

  @media ${devices.tablet} {
    flex-direction: column;
  }
`;


/**
 * I am a styled left element.
 */
const $Left = styled.div`
  display: flex;
  flex: 1.2;

  @media ${devices.laptopL} {
    flex: 0.8
  }

  @media ${devices.tablet} {
    flex: 0.2
  }
`;


/**
 * I am a styled main element.
 */
const $Main = styled.div`
  display: flex;
  padding: 2rem;
  height: 100vh;
  align-items: stretch;
  justify-content: center;

  @media ${devices.tablet} {
    padding: 1rem;
  }
`;


/**
 * I am a styled right element.
 */
const $Right = styled(motion.div)`
  background: #fff;
  display: flex;
  flex: 1;
  overflow: auto;
`;


/**
 * I am a styled right element.
 */
const $RightContent = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: auto;
`;


/**
 * I am the animation variants.
 */
const ease = [0.43, 0.13, 0.23, 0.96];

const variants = {
  initial: {
    opacity: 0,
    transition: { ease, duration: 0.3 },
    x: '-10%'
  },
  animate: {
    opacity: 1,
    transition: { ease, duration: 0.5 },
    x: 0
  },
  exit: {
    opacity: 0,
    transition: { ease, duration: 0.1 },
    x: '-10%'
  }
};


/**
 * EXPORTS
 */
export { $Banner, $Container, $Left, $Main, $Right, $RightContent, variants };
