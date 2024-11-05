import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const pulse = keyframes`
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(145,201,255, 0.7);
    }

    70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(145,201,255, 0);
    }

    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(145,201,255, 0);
    }
`;

export const PulseButton = styled(Link)`
  width: 180px;
  color: #000;
  border: 1px solid #91c9ff;
  text-transform: uppercase;
  text-align: center;
  padding: 10px 0;
  text-decoration: none;
  background: #5ca4ea;
  box-shadow: 0 0 0 0 rgba(145, 201, 255, 1);
  transform: scale(1);
  animation: ${pulse} 2s infinite;
  margin: 2rem auto;
`;

export const ContactButton = styled(Link)`
  width: 180px;
  color: #000;
  border: 1px solid #91c9ff;
  text-transform: uppercase;
  text-align: center;
  padding: 10px 0;
  text-decoration: none;
  background: transparent;
  transition: 1s ease-in-out;
  position: relative;
  span {
    letter-spacing: 3px;
  }
  svg {
    position: absolute;
    left: 0;
    top: 0;
    fill: none;
    stroke: #fff;
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
    transition: 1s ease-in-out;
  }
  &:hover {
    transition: 1s ease-in-out;
    background: #4f95da;
    svg {
      stroke-dashoffset: -480;
    }
  }
`;
