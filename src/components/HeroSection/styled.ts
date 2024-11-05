import styled, { keyframes } from 'styled-components';
import { Box, Typography, Button } from '@mui/material';

const fadein = keyframes`
    to {
    opacity: 1;
    transform: scale(1);
  }
`;
export const HeroContainer = styled(Box)`
  position: relative;
  height: 600px;
  margin: 0;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 550px;
  }
`;


export const DesktopContainer = styled(Box)`
  display: block;
  iframe {
    margin-top: -63px !important;
    margin-bottom: -63px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const MobileContainer = styled(Box)`
  display: none;
  @media (min-width: 768px) {
    display: block;
    iframe {
      margin-top: -200px;
      margin-left: -111px;
    }
  }
  @media (max-width: 768px) {
    display: block;
    iframe {
      margin-top: -219px;
      margin-left: -168px;
    }
  }
`;

export const HeroFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
`;

export const Shadow = styled(Box)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eee;
  opacity: 0.4;
  margin-left: 0 !important;
  z-index: 1;
`;

export const HeroContent = styled(Box)`
  position: absolute;
  z-index: 2;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
`;

export const HeroTitle = styled(Typography)`
  text-transform: uppercase;
  opacity: 0;
  transform: scale(0);
  animation: ${fadein} 2.4s forwards;
  color: #5ca4ea;
  position: relative;
  padding: 20px;
  &:before,
  &:after {
    content: '';
    width: 10px;
    height: 160px;
    background: #5ca4ea;
  }
  &:before {
    position: absolute;
    top: 0;
    left: 0;
  }
  &:after {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const HeroButton = styled(Button)`
  position: absolute;
  bottom: 10px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 20px;
  left: 50%;
  background: #5ca4ea;
  color: #fff;
  z-index: 1;
  transform: translate(-50%, 0);
`;
