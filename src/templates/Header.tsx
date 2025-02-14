import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';

import { Section } from '../layout/Section';
import { Logo } from './Logo';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleClick = (id: string) => {
  scrollToSection(id);
};

const Header = () => {
  return (
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo />}>
        <li className="text-gray-100">
          <a onClick={() => handleClick('about')}>Our Mission</a>
        </li>
        <li className="text-gray-100">
          <a onClick={() => handleClick('services')}>Services</a>
        </li>
        <li className="text-gray-100">
          <a onClick={() => handleClick('about')}>Merchandise</a>
        </li>
        <li className="text-gray-100">
          <a onClick={() => handleClick('contact')}>Contact Us</a>
        </li>
      </NavbarTwoColumns>
    </Section>
  );
};

export { Header };
