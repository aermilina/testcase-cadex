import HeroSection from '@/components/HeroSection';
import SecondSection from '@/components/SecondSection';
import ThirdSection from '@/components/ThirdSection';
import { useRef } from 'react';

export default function Homepage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  };

  return (
    <>
      <HeroSection handleClick={handleClick} />
      <div ref={sectionRef}>
        <SecondSection />
      </div>
      <ThirdSection />
    </>
  );
}
