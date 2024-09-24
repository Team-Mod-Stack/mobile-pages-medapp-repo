import { memo, SVGProps } from 'react';

const Vector160Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 70 0' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H70' stroke='#2260FF' strokeWidth={3} strokeLinecap='round' />
  </svg>
);

const Memo = memo(Vector160Icon);
export { Memo as Vector160Icon };
