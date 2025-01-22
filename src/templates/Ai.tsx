import { Background } from '@/background/Background';
import { CompAi } from '@/ai/CompAi';
import { Section } from '../layout/Section';

const Ai = () => {
  return (
    <Background color="bg-gray-200">
      <Section>
        <CompAi
          title="AI"
          image="/assets/images/ai-logo.svg"
          imageAlt="AI"
          imageWidth="65%"
          text={`Our team specializes in AI and data science, focusing on developing state-of-the-art solutions to tackle complex problems and deliver impactful results.\n\n
          With an extensive expertise in machine learning/deep learning algorithms, data analysis, processing massive datasets, high-performance computing, computer vision, process automation, natural language processing, anomaly detection, personalization, and user experience, we are equipped to habdle diverse projects.\n\n
          With a strong combination of machine learning engineers, electronic engineers, mechanical engineers, and computer science degree holders, our AI team boasts an unparalleled level of expertise prioritizing practical and effective solutions, leveraging technical excellence and a profound understanding of industry-specific challenges.\n\n
          Additionally, we excel in deploying developments accross embedded platforms (on-the-edge), local servers, and the cloud`}
        />
      </Section>
    </Background>
  );
};

export { Ai };
