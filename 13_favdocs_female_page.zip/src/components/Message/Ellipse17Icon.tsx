import { memo, SVGProps } from 'react';

const Ellipse17Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={3} cy={3} r={3} fill='#2260FF' />
  </svg>
);

const Memo = memo(Ellipse17Icon);
export { Memo as Ellipse17Icon };
