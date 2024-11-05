import { Box, Typography } from '@mui/material';
import * as S from './styled';

export default function Announce() {
  return (
    <S.Announce>
      <Typography variant="h3">Title</Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum
        ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
      </Typography>
    </S.Announce>
  );
}
