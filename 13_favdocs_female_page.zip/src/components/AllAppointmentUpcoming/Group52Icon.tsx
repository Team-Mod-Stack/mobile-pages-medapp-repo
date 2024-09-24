import { memo, SVGProps } from 'react';

const Group52Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M27.197 13.1102C27.197 20.3507 21.3274 26.2203 14.0869 26.2203C6.84631 26.2203 0.976685 20.3507 0.976685 13.1102C0.976685 5.86962 6.84631 0 14.0869 0C21.3274 0 27.197 5.86962 27.197 13.1102Z'
      fill='white'
    />
    <path
      d='M9.84166 17.4802L14.0869 13.1102L18.3321 8.7401'
      stroke='#2260FF'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9.71673 8.86498L14.0868 13.1102L18.4568 17.3554'
      stroke='#2260FF'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Group52Icon);
export { Memo as Group52Icon };
