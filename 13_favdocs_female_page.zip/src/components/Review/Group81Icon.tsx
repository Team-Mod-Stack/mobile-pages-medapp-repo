import { memo, SVGProps } from 'react';

const Group81Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={22} height={22} rx={11} fill='#CAD6FF' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.73223 7.77208C7.70854 6.74264 9.29146 6.74264 10.2678 7.77208L11 8.54416L11.7322 7.77208C12.7085 6.74264 14.2915 6.74264 15.2678 7.77208C16.2441 8.80152 16.2441 10.4706 15.2678 11.5L11 16L6.73223 11.5C5.75592 10.4706 5.75592 8.80152 6.73223 7.77208Z'
      fill='#2260FF'
      stroke='#2260FF'
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(Group81Icon);
export { Memo as Group81Icon };
