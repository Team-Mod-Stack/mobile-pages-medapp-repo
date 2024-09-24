import { memo, SVGProps } from 'react';

const Rectangle80Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 202 80' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M201.5 20C201.5 8.95431 192.546 0 181.5 0H24.5C13.4543 0 4.5 8.95431 4.5 20V66.7805C4.5 68.9027 4.04969 71.0007 3.17882 72.9359L0 80H181.5C192.546 80 201.5 71.0457 201.5 60V20Z'
      fill='#ECF1FF'
    />
  </svg>
);

const Memo = memo(Rectangle80Icon);
export { Memo as Rectangle80Icon };
