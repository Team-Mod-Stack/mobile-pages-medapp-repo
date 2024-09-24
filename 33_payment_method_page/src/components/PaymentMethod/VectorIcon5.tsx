import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.51541 19.2374L1.99997 22H5.35709L6.6688 13.6722L9.85716 13.6722C12.6975 13.6722 15 11.2824 15 8.33449C15 6.71536 14.3054 5.26461 13.2086 4.28571M0 19.2857L2.1112 1.30087C2.1112 0.582421 2.66721 2.20616e-07 3.35308 1.90636e-07L7.71431 0C10.5546 3.69054e-06 12.8571 2.41191 12.8571 5.38715C12.8571 8.36239 10.5546 10.7743 7.71431 10.7743L4.16884 10.7743L3 19.2857H0Z'
      stroke='#2260FF'
      strokeWidth={2}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
