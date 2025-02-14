import { Background } from '@/background/Background';
import { CompAboutUs } from '../aboutus/CompAboutUs';
import { Section } from '../layout/Section';

const AboutUs = () => {
  return (
    <Background>
      <Section>
        <CompAboutUs
          title="Our mission"
          text={`To help individuals break through physical and mental barriers by eliminating excuses, mastering
discipline, and creating lasting transformations through structured training, mindset shifts, and
optimized nutrition.`}
        />
      </Section>
    </Background>
  );
};

export { AboutUs };
