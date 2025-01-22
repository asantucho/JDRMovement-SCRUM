/* @eslint-disable import/order */
import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => {
  return (
    <Background color="bg-gray-200" width="">
      <Section yPadding="pt-12 pb-24">
        <HeroOneButton
          title={
            <>
              <span className="text-primary-700">
                {'Your Personalized Fitness Journey Starts Now'}
              </span>
            </>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };
