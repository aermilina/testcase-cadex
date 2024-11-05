import ContactButton from '../ContactButton';
import * as S from './styled';

export default function ThirdSection() {
  return (
    <S.SectionBack h3 name="Less important title">
      <ContactButton pulse />
    </S.SectionBack>
  );
}
