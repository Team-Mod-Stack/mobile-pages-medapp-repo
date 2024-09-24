import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 6.03H24M3.30435 14.31H7.13043M10.2609 14.31H14.087M1.73913 18H22.2609C23.2214 18 24 17.1941 24 16.2V1.8C24 0.805888 23.2214 0 22.2609 0H1.73913C0.778635 0 0 0.805888 0 1.8V16.2C0 17.1941 0.778635 18 1.73913 18Z'
      stroke='#2260FF'
      strokeWidth={2}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
