import * as S from './styled';
import { Typography } from '@mui/material';

interface Props {
  pulse?: boolean;
}

export default function ContactButton({ pulse }: Props) {
  if (pulse) {
    return (
      <S.PulseButton href="/contact">
        <Typography variant="body1" sx={{ color: '#fff' }}>
          Contact us
        </Typography>
      </S.PulseButton>
    );
  }
  return (
    <S.ContactButton href="/contact">
      <svg width="180px" height="50px" viewBox="0 0 180 50">
        <polyline points="179,1 179,49 1,49 1,1 179,1" />
        <polyline points="179,1 179,49 1,49 1,1 179,1" />
      </svg>
      <Typography variant="body1" sx={{ color: '#fff' }}>
        Contact us
      </Typography>
    </S.ContactButton>
  );
}
