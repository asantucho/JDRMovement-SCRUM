import { Background } from '@/background/Background';
import { CompAboutUs } from '../aboutus/CompAboutUs';
import { Section } from '../layout/Section';

const AboutUs = () => {
  return (
    <Background>
      <Section>
        <CompAboutUs
          title="About Us"
          image="/assets/images/aboutus-logo.svg"
          imageAlt="About Us"
          imageWidth="65%"
          text={`We are a company with decades of combined experience in software development and electronics systems design, bringing unparalleled expertise to every project.\n\n
          Our team boasts a diverse skill set embracing software development, system architecture, hardware design, project management, and much more!\n\n
          From leading development teams across various industries to successfully managing projects in web, mobile, cloud, AI, aerospace, defense, telecommunications, and networking domains, we have proven track record of delivering tailored, high-quality solutions.\n\n
          Driven by our unwavering passion for innovation and our steadfast commitment to excellence, we consistently exceed client expectations, pushing the boundaries of what's possible and pioneering new frontiers in the software industry.`}
        />
      </Section>
    </Background>
  );
};

export { AboutUs };
