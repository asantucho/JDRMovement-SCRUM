import { useState } from 'react';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Header } from './Header';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Banner } from './Banner';
import FormComponent from './FormComponent';

const Base = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header />
      <Hero />
      {/* 
        <VerticalFeatures />
        <Ai />
        <AboutUs />
        */}
      <Banner toggleFormVisibility={toggleFormVisibility} />
      {showForm && <FormComponent />}
      <Footer />
    </div>
  );
};

export { Base };
