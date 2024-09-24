import { memo, SVGProps } from 'react';

const VectorIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M-6.11959e-07 14L8 7L0 -3.49691e-07'
      stroke='#2260FF'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon6);
export { Memo as VectorIcon6 };
