import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M26.2203 13.1102C26.2203 20.3507 20.3507 26.2203 13.1102 26.2203C5.86962 26.2203 0 20.3507 0 13.1102C0 5.86962 5.86962 0 13.1102 0C20.3507 0 26.2203 5.86962 26.2203 13.1102Z'
      fill='#2260FF'
    />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
