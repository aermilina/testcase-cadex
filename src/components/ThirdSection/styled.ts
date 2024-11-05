import styled, { keyframes } from 'styled-components';
import Section from '../Section';

const gradient = keyframes`
    0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
    `;

export const SectionBack = styled(Section)`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  height: 100vh;
  justify-content: center;
`;