import { memo, SVGProps } from 'react';

const VectorIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.00097784 -9.01222e-05L6.00098 7.99991L12.001 -9.01222e-05'
      stroke='#2260FF'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon6);
export { Memo as VectorIcon6 };
