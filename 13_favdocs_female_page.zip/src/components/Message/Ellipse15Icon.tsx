import { memo, SVGProps } from 'react';

const Ellipse15Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 37' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={18} cy={18.5} rx={18} ry={18.5} fill='#2260FF' />
  </svg>
);

const Memo = memo(Ellipse15Icon);
export { Memo as Ellipse15Icon };
