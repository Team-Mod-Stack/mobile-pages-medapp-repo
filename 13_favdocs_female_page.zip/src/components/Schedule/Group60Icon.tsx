import { memo, SVGProps } from 'react';

const Group60Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 314 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.15686 0.869146L-2.24271e-07 5.99987L6.15686 11.1306'
      stroke='#809CFF'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M307.843 0.869146L314 5.99987L307.843 11.1306'
      stroke='#809CFF'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Group60Icon);
export { Memo as Group60Icon };
