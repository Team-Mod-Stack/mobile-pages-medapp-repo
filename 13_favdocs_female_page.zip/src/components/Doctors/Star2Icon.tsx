import { memo, SVGProps } from 'react';

const Star2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.5 0L6.95477 3.49768L10.7308 3.80041L7.85386 6.26482L8.73282 9.94959L5.5 7.975L2.26718 9.94959L3.14614 6.26482L0.269189 3.80041L4.04523 3.49768L5.5 0Z'
      stroke='#2260FF'
    />
  </svg>
);

const Memo = memo(Star2Icon);
export { Memo as Star2Icon };
