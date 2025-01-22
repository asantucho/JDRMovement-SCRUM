import { BackToTheTop } from '@/arrow/BackToTheTop';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from "../layout/Section";

const VerticalFeatures = () => (
  <Section>
    <div className="text-center" id="services">
        <h1 className="whitespace-pre-line text-4xl font-bold leading-hero text-gray-900">What We Do</h1>
    </div>
    <VerticalFeatureRow
      title="Web and App development"
      description="Unlock your digital potential with our comprehensive development services. From crafting engaging websites to building intuitive mobile applications for both iOS and Android platforms, we specialize in bringing your ideas to life. Explore our expertise in web and app development, and let's innovate together."
      image="/assets/images/service-development.svg"
      imageAlt="Web and App development"
      imageWidth="60%"
      imageClassname='mx-auto'
    />
    <VerticalFeatureRow
      title="Staff Augmentation"
      description="Elevate your team with our flexible staff augmentation solutions. Whether you need skilled professionals to bolster your development efforts, or expert guidance to navigate complex projects, we're here to seamlessly integrate with your team. Experience the power of augmented capabilities tailored to your unique needs."
      image="/assets/images/service-staff.svg"
      imageAlt="Staff Augmentation"
      imageWidth="60%"
      reverse
      imageClassname='mx-auto'
    />
    <VerticalFeatureRow
      title="Maximize IT ROI"
      description="Drive maximum value from your IT investments with our strategic solutions. We specialize in optimizing your IT infrastructure, processes, and investments to ensure you achieve the highest return on investment. Let us guide you towards efficient, cost-effective solutions that elevate your business performance and profitability."
      image="/assets/images/service-maximize.svg"
      imageAlt="Maximize IT ROI"
      imageWidth="60%"
      imageClassname='mx-auto'
    />
    <BackToTheTop/>
  </Section>
);

export { VerticalFeatures };
