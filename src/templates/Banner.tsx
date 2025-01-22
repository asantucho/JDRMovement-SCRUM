import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

type IBannerProps = {
  toggleFormVisibility: () => void;
  id?: string;
};

const Banner = (props: IBannerProps) => {
  return (
    <>
      <Section>
        <CTABanner
          title="Take Control of Your Health"
          subtitle="Connect with Us Today"
          button={
            <Button onClick={() => props.toggleFormVisibility()}>
              Contact Us
            </Button>
          }
        />
      </Section>
    </>
  );
};

export { Banner };
