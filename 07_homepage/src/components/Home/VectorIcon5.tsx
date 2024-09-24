import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 3.38462C3.40909 -1.12821 11.25 -1.12821 15 3.38462M11.5 5.61538C9.60606 3.35897 5.25 3.35897 3.16667 5.61538M7.33333 8H6.5'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
