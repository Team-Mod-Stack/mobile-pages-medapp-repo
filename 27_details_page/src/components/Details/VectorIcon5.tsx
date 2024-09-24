import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.131958 5.27885L3.28661 9.22608L11.7544 0.509277'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
