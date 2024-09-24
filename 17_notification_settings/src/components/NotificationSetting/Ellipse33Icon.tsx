import { memo, SVGProps } from 'react';

const Ellipse33Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={10.7273} cy={10} r={10} fill='white' />
  </svg>
);

const Memo = memo(Ellipse33Icon);
export { Memo as Ellipse33Icon };
