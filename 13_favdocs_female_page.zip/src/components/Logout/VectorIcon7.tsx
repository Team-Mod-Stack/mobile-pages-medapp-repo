import { memo, SVGProps } from 'react';

const VectorIcon7 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M-1.07022e-07 11L8 5.5L4.76837e-07 -2.87981e-07'
      stroke='#CAD6FF'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon7);
export { Memo as VectorIcon7 };