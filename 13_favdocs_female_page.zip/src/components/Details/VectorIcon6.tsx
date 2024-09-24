import { memo, SVGProps } from 'react';

const VectorIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M27.197 13.1102C27.197 20.3507 21.3274 26.2203 14.0869 26.2203C6.84631 26.2203 0.976685 20.3507 0.976685 13.1102C0.976685 5.86962 6.84631 0 14.0869 0C21.3274 0 27.197 5.86962 27.197 13.1102Z'
      fill='#2260FF'
    />
  </svg>
);

const Memo = memo(VectorIcon6);
export { Memo as VectorIcon6 };
