/* @eslint-disable import/order */
import { HeroOneButton } from '@/hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => {
  return (
    <Section yPadding="pt-12 pb-24">
      <HeroOneButton
        title={
          <>
            <span className="text-primary-700">
              {'No excuses. No shortcuts. Just results'}
            </span>
          </>
        }
      />
    </Section>
  );
};

export { Hero };
