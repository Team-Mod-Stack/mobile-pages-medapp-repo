import { memo, SVGProps } from 'react';

const Ellipse13Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={22.5} cy={22.5} r={22.5} fill='#2260FF' />
  </svg>
);

const Memo = memo(Ellipse13Icon);
export { Memo as Ellipse13Icon };