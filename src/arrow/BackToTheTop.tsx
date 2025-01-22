import {useState, useEffect} from 'react';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};


const BackToTheTop = () => {

  const handleClick = (id: string) => {
    scrollToSection(id);
  };

    const [arrowWidth, setArrowWidth] = useState<string>('2%');

  useEffect(() => {
    const handleResize = () => {
      setArrowWidth(window.innerWidth <= 768 ? '8%' : '2%');
    };

    handleResize(); // Initial call

    window.addEventListener('resize', handleResize); // Add resize event listener

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="text-center w-full">
      <a onClick={() => handleClick("header")}>
        <img
          src="/assets/images/obsolete-arrow.svg"
          alt="back to the top arrow"
          style={{ width: arrowWidth }}
          className="mx-auto"
        />
      </a>
    </div>
);

}



export { BackToTheTop };