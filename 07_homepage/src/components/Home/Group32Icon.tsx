import { memo, SVGProps } from 'react';

const Group32Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M4 0L5.05801 2.54377L7.80423 2.76393L5.7119 4.55623L6.35114 7.23607L4 5.8L1.64886 7.23607L2.2881 4.55623L0.195774 2.76393L2.94199 2.54377L4 0Z'
      stroke='#2260FF'
    />
  </svg>
);

const Memo = memo(Group32Icon);
export { Memo as Group32Icon };
