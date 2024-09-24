import { memo, SVGProps } from 'react';

const Group14Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.71184 4.99995H2.79658M4.9152 4.99995H4.99995M7.11857 4.99995H7.20332M9.9999 4.88635C9.9999 5.98334 9.63001 6.99589 9.00547 7.8114L9.8309 9.7727C9.87035 9.90147 9.75443 10.0244 9.62068 9.99568L7.37637 9.18658C6.66953 9.56043 5.86011 9.7727 4.99995 9.7727C2.23855 9.7727 0 7.58501 0 4.88635C0 2.18769 2.23855 0 4.99995 0C7.76135 0 9.9999 2.18769 9.9999 4.88635Z'
      stroke='#2260FF'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Group14Icon);
export { Memo as Group14Icon };
