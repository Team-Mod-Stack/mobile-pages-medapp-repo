import { memo, SVGProps } from 'react';

const VectorIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.55605 3.81244C9.15142 4.11413 9.14701 4.97295 8.54857 5.2684L1.15968 8.91623C0.622853 9.18126 -0.00308764 8.78504 1.14621e-05 8.18217L0.0189616 4.49578L0.0379117 0.809401C0.0410108 0.206529 0.670991 -0.183121 1.20506 0.087506L8.55605 3.81244Z'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon6);
export { Memo as VectorIcon6 };
