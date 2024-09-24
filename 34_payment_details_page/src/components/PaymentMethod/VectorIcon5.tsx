import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 48 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 1.8C0 0.805889 0.778635 0 1.73913 0L45.7609 0C46.7214 0 47.5 0.805887 47.5 1.8V9C47.5 9.99411 46.7214 10.8 45.7609 10.8H1.73913C0.778635 10.8 0 9.99411 0 9V1.8Z'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
