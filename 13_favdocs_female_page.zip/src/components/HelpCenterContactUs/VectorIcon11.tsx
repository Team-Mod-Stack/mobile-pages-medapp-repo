import { memo, SVGProps } from 'react';

const VectorIcon11 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M22 11C22 17.0751 17.0751 22 11 22M22 11C22 4.92487 17.0751 0 11 0M22 11H0M11 22C4.92487 22 0 17.0751 0 11M11 22C13.3228 22 15.2059 17.0751 15.2059 11C15.2059 4.92487 13.3228 0 11 0M11 22C8.67716 22 6.79412 17.0751 6.79412 11C6.79412 4.92487 8.67716 0 11 0M0 11C0 4.92487 4.92487 0 11 0M1.94118 4.85294C1.94118 4.85294 5.50277 6.47059 11.0774 6.47059C16.6521 6.47059 20.0588 4.85294 20.0588 4.85294M20.0588 17.1471C20.0588 17.1471 16.4972 15.5294 10.9226 15.5294C5.34791 15.5294 1.94118 17.1471 1.94118 17.1471'
      stroke='#2260FF'
      strokeWidth={2}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon11);
export { Memo as VectorIcon11 };
