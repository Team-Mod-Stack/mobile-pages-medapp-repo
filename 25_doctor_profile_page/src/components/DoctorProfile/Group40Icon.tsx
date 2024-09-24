import { memo, SVGProps } from 'react';

const Group40Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 80 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M4.70588 0.882356L-1.79988e-07 5L4.70588 9.11765'
      stroke='#2260FF'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M75.2941 0.882356L80 5L75.2941 9.11765'
      stroke='#2260FF'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Group40Icon);
export { Memo as Group40Icon };
