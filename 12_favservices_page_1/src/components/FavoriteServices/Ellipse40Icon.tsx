import { memo, SVGProps } from 'react';

const Ellipse40Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={12} cy={12} r={12} fill='white' />
  </svg>
);

const Memo = memo(Ellipse40Icon);
export { Memo as Ellipse40Icon };
