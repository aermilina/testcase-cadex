import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import * as S from './styled';

interface Props {
  handleClick: () => void;
}

export default function HeroSection({ handleClick }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);
  const link =
    'https://www.youtube.com/embed/dQw4w9WgXcQ?si=8OsNVIyI2OIR4pA1&amp;loop=1&amp;controls=0&amp;start=9&amp;mute=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;autoplay=1';
  return (
    <S.HeroContainer>
      {loading && (
        <S.HeroFrame
          frameBorder="0"
          allow="fullscreen; accelerometer; encrypted-media; gyroscope; picture-in-picture"
          src={link}
          loading="lazy"
          title="youtube cover"
        />
      )}

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
