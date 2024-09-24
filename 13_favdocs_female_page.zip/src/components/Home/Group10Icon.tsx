import { memo, SVGProps } from 'react';

const Group10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.0294 5.51471C11.0294 8.56039 8.56039 11.0294 5.51471 11.0294C2.46902 11.0294 0 8.56039 0 5.51471C0 2.46902 2.46902 0 5.51471 0C8.56039 0 11.0294 2.46902 11.0294 5.51471Z'
      fill='white'
    />
    <path
      d='M3.729 7.35295L5.51472 5.51472L7.30043 3.67648'
      stroke='#2260FF'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M3.6765 3.729L5.51473 5.51472L7.35297 7.30043'
      stroke='#2260FF'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Group10Icon);
export { Memo as Group10Icon };
