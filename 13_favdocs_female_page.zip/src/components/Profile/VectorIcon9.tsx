import { memo, SVGProps } from 'react';

const VectorIcon9 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M-1.601e-07 12L8 6L4.76837e-07 -2.87981e-07'
      stroke='#CAD6FF'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon9);
export { Memo as VectorIcon9 };
