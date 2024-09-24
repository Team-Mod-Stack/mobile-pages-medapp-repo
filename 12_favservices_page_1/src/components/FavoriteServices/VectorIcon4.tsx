import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.60673e-06 -1.22392e-06L7 8L14 0'
      stroke='#2260FF'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
