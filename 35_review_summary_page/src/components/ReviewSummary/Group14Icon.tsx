import { memo, SVGProps } from 'react';

const Group14Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.4735 5.97777H3.55925M5.70281 5.97777H5.78856M7.93212 5.97777H8.01787M10.8474 5.86283C10.8474 6.97273 10.4731 7.99721 9.84124 8.82232L10.6764 10.8067C10.7163 10.937 10.599 11.0614 10.4637 11.0323L8.19296 10.2137C7.4778 10.5919 6.65884 10.8067 5.78856 10.8067C2.99465 10.8067 0.729736 8.59326 0.729736 5.86283C0.729736 3.1324 2.99465 0.918945 5.78856 0.918945C8.58247 0.918945 10.8474 3.1324 10.8474 5.86283Z'
      stroke='#2260FF'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Group14Icon);
export { Memo as Group14Icon };
