import { Background } from '@/background/Background';
import { CompServices } from '@/services/CompServices';
import { Section } from '../layout/Section';

const Services = () => {
  return (
    <Background color="bg-gray-200">
      <Section>
        <CompServices
          title="Services"
          images={[
            {
              image: '/assets/images/pexels-justindoherty-4929721.jpg',
              imageAlt: 'Meal Plan',
              imageWidth: '65%',
              title: 'Meal Plans',
              text: 'Our standardized meal plans take the guesswork out of healthy eating. Designed for different goals—weight loss, muscle gain, or maintenance—each plan offers a structured approach with pre-set meals that keep nutrition simple and effective. Just choose your goal, and we’ll handle the rest!.',
            },
            {
              image: '/assets/images/pexels-yankrukov-8436147.jpg',
              imageAlt: 'Workout Plans',
              imageWidth: '65%',
              title: 'Workout Plans',
              text: 'Stay on track with our standardized workout plans, designed to fit your fitness goal—whether it is building muscle, losing weight, or improving endurance. No customization, just proven routines that deliver results. Pick your goal, follow the plan, and start seeing progress!',
            },
            {
              image: '/assets/images/young-women-gym-talking.jpg',
              imageAlt: 'Personalized sessions',
              imageWidth: '65%',
              title: 'Personalized Coaching Sessions',
              text: 'Take your fitness journey to the next level with a one-on-one coaching session. Our expert coach will create a customized meal and workout plan tailored to your specific goals, lifestyle, budget, and personal factors like age and experience level. Get the guidance you need to achieve real results—designed just for you!',
            },
          ]}
        />
      </Section>
    </Background>
  );
};

export { Services };
