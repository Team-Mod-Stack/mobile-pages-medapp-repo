import { memo, SVGProps } from 'react';

const Ellipse22Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={10} cy={10} r={10} stroke='#2260FF' />
  </svg>
);

const Memo = memo(Ellipse22Icon);
export { Memo as Ellipse22Icon };
