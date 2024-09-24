import { memo, SVGProps } from 'react';

const VectorIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.14286 9H2.26116M2.32143 6.92308V6.1049C2.32143 5.34019 2.9999 4.75266 3.69322 4.3877C4.47589 3.9757 5 3.22185 5 2.36014C5 1.05667 3.80076 0 2.32143 0C1.32912 0 0.462841 0.475445 0 1.1819'
      stroke='#2260FF'
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon6);
export { Memo as VectorIcon6 };
