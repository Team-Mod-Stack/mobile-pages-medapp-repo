import { memo, SVGProps } from 'react';

const VectorIcon9 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.00097784 0.000184536L6.00098 8.00018L12.001 0.000184536'
      stroke='#2260FF'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon9);
export { Memo as VectorIcon9 };
