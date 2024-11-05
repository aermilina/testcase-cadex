import styled from 'styled-components';
import { Box } from '@mui/material';

export const Announce = styled(Box)`
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: 14px;
  &:hover {
    box-shadow: rgba(92, 164, 234, 1) 0px 3px 8px;
  }
`;
