import { Typography } from '@mui/material';
import * as S from './styled';

interface Props {
  handleClick: () => void;
}

export default function HeroSection({ handleClick }: Props) {
  const link =
    'https://www.youtube.com/embed/dQw4w9WgXcQ?si=8OsNVIyI2OIR4pA1&amp;loop=1&amp;controls=0&amp;start=9&amp;mute=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;autoplay=1';
  return (
    <S.HeroContainer>
      <S.MobileContainer>
        <S.HeroFrame
          width="1000"
          height="1000"
          frameBorder="0"
          allow="fullscreen; accelerometer; encrypted-media; gyroscope; picture-in-picture"
          src={link}
          loading="lazy"
        />
      </S.MobileContainer>
      <S.DesktopContainer>
        <S.HeroFrame
          width="100%"
          height="800"
          frameBorder="0"
          allow="fullscreen; accelerometer; encrypted-media; gyroscope; picture-in-picture"
          src={link}
          loading="lazy"
          data-autoplay
          data-keepplaying
        />
      </S.DesktopContainer>
      <S.Shadow />
      <S.HeroContent>
        <S.HeroTitle variant="h1">Main Title</S.HeroTitle>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography variant="body1">
          Aliquam mattis, leo et condimentum ultricies, sem urna
        </Typography>
        <Typography variant="body1">
          convallis metus, vel suscipit nibh lacus tincidunt ante
        </Typography>
      </S.HeroContent>
      <S.HeroButton onClick={handleClick}>↓</S.HeroButton>
    </S.HeroContainer>
  );
}
