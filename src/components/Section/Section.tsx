import * as S from './styled';

interface Props {
  name: string;
  children: React.ReactNode;
  h3?: boolean;
}
export default function Section({ name, children, h3, ...props }: Props) {
  return (
    <S.Section id="#secondSec" {...props}>
      <S.SectionTitle variant={h3 ? 'h3' : 'h2'}>{name}</S.SectionTitle>
      {children}
    </S.Section>
  );
}
