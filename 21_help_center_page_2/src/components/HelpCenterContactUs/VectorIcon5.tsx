import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.5 0.5L6 8.5L11.5 0.5' stroke='#2260FF' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
