import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

// Commenting out the functions outside of JSX
// const scrollToSection = (id: string) => {
//   const element = document.getElementById(id);
//   if (element) {
//     element.scrollIntoView({ behavior: 'smooth' });
//   }
// };

// const handleClick = (id: string) => {
//   scrollToSection(id);
// };

const Header = () => {
  return (
    <Background color="bg-gray-200" width="">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo />} />
        {/* Uncomment the following lines when ready */}
        {/* 
        <li>
          <a onClick={() => handleClick("services")}>Services</a>
        </li>
        <li>
          <a onClick={() => handleClick("ai")}>AI</a>
        </li>
        <li>
          <a onClick={() => handleClick("about")}>About Us</a>
        </li>
        <li>
          <a onClick={() => handleClick("contact")}>Contact Us</a>
        </li> 
        */}
      </Section>
    </Background>
  );
};

export { Header };
