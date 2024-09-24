import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.0124 8.57561L0.0358163 8.49204M0.0716111 1.52887L2.16506e-05 15.4552C-0.00583221 16.594 1.1765 17.3424 2.1905 16.8418L16.1473 9.95142C17.2777 9.39335 17.286 7.77113 16.1614 7.20127L2.27623 0.165289C1.26743 -0.345895 0.0774649 0.39011 0.0716111 1.52887Z'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
