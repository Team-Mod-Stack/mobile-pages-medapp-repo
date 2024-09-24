import { memo, SVGProps } from 'react';

const VectorIcon8 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M4.27119 7.2H13.4237M4.27119 11.1H13.4237M18 8.79552C18 10.7701 17.3342 12.5927 16.21 14.0607L17.6958 17.591C17.7668 17.8228 17.5581 18.0441 17.3174 17.9924L13.2776 16.536C12.0053 17.209 10.5483 17.591 9 17.591C4.02944 17.591 0 13.6532 0 8.79552C0 3.93789 4.02944 0 9 0C13.9706 0 18 3.93789 18 8.79552Z'
      stroke='#CAD6FF'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon8);
export { Memo as VectorIcon8 };
