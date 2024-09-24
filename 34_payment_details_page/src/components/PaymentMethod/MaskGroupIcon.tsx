import { memo, SVGProps } from 'react';

const MaskGroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 300 179' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <mask
      id='mask0_2022_1144'
      style={{
        maskType: 'alpha',
      }}
      maskUnits='userSpaceOnUse'
      x={0}
      y={0}
      width={300}
      height={179}
    >
      <rect width={300} height={179} rx={16} fill='#2260FF' />
    </mask>
    <g mask='url(#mask0_2022_1144)'>
      <path d='M187.5 35.8881L-10.043 138.423L-0.0688882 -83.9223L187.5 35.8881Z' fill='#4378FF' />
      <path d='M310.563 114.299L122.913 -5.38385L320.386 -108.053L310.563 114.299Z' fill='#6892FF' />
    </g>
  </svg>
);

const Memo = memo(MaskGroupIcon);
export { Memo as MaskGroupIcon };
