import {CompMedia} from "../media/CompMedia"
import { Section } from '../layout/Section';


const Media = () => {
  return (
    <>
      <Section>
        <CompMedia
          title="Media"
          text={`We are writing down some random words to get an approximate idea how the media section is going to look like and how much room from the landing page is going to take.\n\n
          Our team is trying its best to try and get the most accurate amount of room, to test the app and test the responsiveness.\n\n
          From leading development teams across various industries to successfully managing projects in web, mobile, cloud, AI, aerospace, defense, telecommunications, and networking domains, we have proven track record of delivering tailored, high-quality solutions.\n\n
          Driven by our unwavering passion for innovation and our steadfast commitment to excellence, we consistently exceed client expectations, pushing the boundaries of what's possible and pioneering new frontiers in the software industry.`}
          image="/assets/images/media-logo.svg"
          imageAlt="media"
          imageWidth="50%"
        />
      </Section>
    </>
  );
};

export { Media };