import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description?: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <div className="mt-20 text-center">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
      {props.title}
    </h1>
    <p className="mb-16 mt-4 text-2xl text-black">{props.description}</p>
  </div>
);

export { HeroOneButton };
