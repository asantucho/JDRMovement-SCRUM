import { useState } from 'react';
import { Background } from '@/background/Background';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Header } from './Header';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Banner } from './Banner';
import FormComponent from './FormComponent';
import { AboutUs } from './AboutUs';
import { Services } from './Services';

const Base = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Background image="/front-view-woman-with-dumbbells-copy-space.jpg">
        <Header />
        <Hero />
        <AboutUs />
        <Services />
      </Background>
      <Banner toggleFormVisibility={toggleFormVisibility} />
      {showForm && <FormComponent />}
      <Footer />
      {/* 
        <VerticalFeatures />
        
        
        */}
    </div>
  );
};

export { Base };
