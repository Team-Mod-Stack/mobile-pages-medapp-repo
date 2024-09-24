import { memo, SVGProps } from 'react';

const Group50Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect x={0.480011} y={0.73999} width={23.52} height={23.52} rx={11.76} fill='white' />
    <path
      d='M6.79855 8.57999C6.40172 8.57999 6.08002 8.86076 6.08002 9.20712V16.9128C6.08002 17.2592 6.40172 17.54 6.79855 17.54L14.7435 17.54C15.1403 17.54 15.462 17.2592 15.462 16.9129V9.20715C15.462 8.8608 15.1403 8.58002 14.7435 8.58002L6.79855 8.57999Z'
      stroke='#2260FF'
    />
    <path
      d='M15.462 10.5348V15.3376C15.462 15.4684 15.7441 15.5894 16.2029 15.6554L18.2444 16.2408C18.8834 16.4241 19.52 15.9444 19.52 15.2796V10.6305C19.52 9.97277 18.896 9.49416 18.2608 9.66465L16.2029 10.217C15.7441 10.283 15.462 10.4039 15.462 10.5348Z'
      stroke='#2260FF'
    />
  </svg>
);

const Memo = memo(Group50Icon);
export { Memo as Group50Icon };
