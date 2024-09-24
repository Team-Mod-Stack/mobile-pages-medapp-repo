import { memo, SVGProps } from 'react';

const Rectangle81Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 210 47' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M209.5 20C209.5 8.95431 200.546 0 189.5 0L24.5 0C13.4543 0 4.5 8.9543 4.5 20V33.7805C4.5 35.9027 4.04969 38.0007 3.17882 39.9359L0 47H189.5C200.546 47 209.5 38.0457 209.5 27V20Z'
      fill='#ECF1FF'
    />
  </svg>
);

const Memo = memo(Rectangle81Icon);
export { Memo as Rectangle81Icon };
