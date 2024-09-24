import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 172 172' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M49.1429 91.4346L69.8921 117.397L125.587 60.0635M172 86C172 133.496 133.496 172 86 172C38.5035 172 0 133.496 0 86C0 38.5035 38.5035 0 86 0C133.496 0 172 38.5035 172 86Z'
      stroke='white'
      strokeWidth={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
