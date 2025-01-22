import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color?: string;
  width?: string;
  margin?: string;
};

const Background = (props: IBackgroundProps) => (
  <div className={`${props.color} ${props.width} ${props.margin}`}>{props.children}</div>
);

export { Background };
