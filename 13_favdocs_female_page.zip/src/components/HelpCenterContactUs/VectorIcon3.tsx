import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M-1.53269e-07 4.76837e-07L6 8L12 4.76837e-07'
      stroke='#2260FF'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
