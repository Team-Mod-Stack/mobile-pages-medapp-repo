import { memo, SVGProps } from 'react';

const VectorIcon8 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.716735 0.86499L5.08679 5.11019L9.45685 9.35539'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon8);
export { Memo as VectorIcon8 };
