import { memo, SVGProps } from 'react';

const Group18Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5 0L6.32252 3.17971L9.75528 3.45492L7.13988 5.69529L7.93893 9.04508L5 7.25L2.06107 9.04508L2.86012 5.69529L0.244718 3.45492L3.67748 3.17971L5 0Z'
      fill='white'
      stroke='white'
    />
  </svg>
);

const Memo = memo(Group18Icon);
export { Memo as Group18Icon };
