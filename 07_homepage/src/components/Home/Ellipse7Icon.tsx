import { memo, SVGProps } from 'react';

const Ellipse7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={13.5} cy={13.5} r={13.5} fill='#CAD6FF' />
  </svg>
);

const Memo = memo(Ellipse7Icon);
export { Memo as Ellipse7Icon };
