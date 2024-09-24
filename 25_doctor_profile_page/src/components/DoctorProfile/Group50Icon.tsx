import { memo, SVGProps } from 'react';

const Group50Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={21} height={21} rx={10.5} fill='#2260FF' />
    <path
      d='M5.64155 7C5.28723 7 5 7.25069 5 7.55993V14.44C5 14.7493 5.28723 15 5.64155 15L12.7352 15C13.0896 15 13.3768 14.7493 13.3768 14.4401V7.55996C13.3768 7.25072 13.0896 7.00003 12.7352 7.00003L5.64155 7Z'
      stroke='white'
    />
    <path
      d='M13.3768 8.74534V13.0336C13.3768 13.1504 13.6286 13.2584 14.0383 13.3173L15.7243 13.8008C16.3634 13.9841 17 13.5044 17 12.8396V8.97048C17 8.31278 16.376 7.83417 15.7408 8.00466L14.0383 8.46159C13.6286 8.5205 13.3768 8.62853 13.3768 8.74534Z'
      stroke='white'
    />
  </svg>
);

const Memo = memo(Group50Icon);
export { Memo as Group50Icon };
