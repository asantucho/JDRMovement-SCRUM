import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color?: string;
  width?: string;
  margin?: string;
  image?: string;
};

const Background = (props: IBackgroundProps) => (
  <div
    className={`${props.color} ${props.width} ${props.margin}`}
    style={
      props.image
        ? {
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'transparent',
          }
        : {}
    }
  >
    {props.children}
  </div>
);

export { Background };
