import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const Section = styled(Box)`
  display: flex;
  flex-flow: column;
  padding: 52px 1rem;
`;

export const SectionTitle = styled(Typography)`
  margin: 20px auto;
  text-transform: uppercase;
  font-weight: 500;
`;
