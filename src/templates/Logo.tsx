import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
  location?: 'footer';
  width?: number;
};

const Logo = (props: ILogoProps) => {
  const [xl, setXl] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setXl(window.innerWidth > 768);
    };

    // Initial call
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures effect runs only once on mount

  const size = xl ? '200' : '120';
  const fontStyle = xl ? 'font-semibold text-3xl' : 'font-semibold text-xl';

  const logoSrc =
    props.location === 'footer'
      ? '/jdrmovement-logo-footer.png'
      : '/jdrmovement-logo-main.png';

  const imageSize = props.width || size;

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <Image
        src={logoSrc}
        alt={AppConfig.site_name}
        width={imageSize}
        height={imageSize}
      />
    </span>
  );
};

export { Logo };
