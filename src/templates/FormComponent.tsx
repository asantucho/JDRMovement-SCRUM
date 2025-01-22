import { useState } from 'react';
import { Section } from '@/layout/Section';
import ToastifySuccess from '@/toast/ToastifySucess';
import Form from '../form/Form';




const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log("Response received:", response);

      const jsonResponse = await response.json();

      if (jsonResponse.ok) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setFormSubmitted(true);
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <Section>
      <Form
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {formSubmitted && <ToastifySuccess message="Form submitted successfully!" />}
    </Section>
  );
};

export default FormComponent;
