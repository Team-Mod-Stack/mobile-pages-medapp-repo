import { memo, SVGProps } from 'react';

const Star1Icon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5 0L6.32252 3.17971L9.75528 3.45492L7.13988 5.69529L7.93893 9.04508L5 7.25L2.06107 9.04508L2.86012 5.69529L0.244718 3.45492L3.67748 3.17971L5 0Z'
      fill='#2260FF'
      stroke='#2260FF'
    />
  </svg>
);

const Memo = memo(Star1Icon4);
export { Memo as Star1Icon4 };
