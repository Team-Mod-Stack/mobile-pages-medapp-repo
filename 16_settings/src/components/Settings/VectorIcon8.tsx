import { memo, SVGProps } from 'react';

const VectorIcon8 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 19 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14.7713 5.14119C15.0946 8.21146 12.9028 10.8953 9.87571 11.1357C6.84867 11.3761 4.13271 9.08209 3.80945 6.01182C3.48619 2.94155 5.67804 0.257714 8.70508 0.0172967C11.7321 -0.223121 14.4481 2.07093 14.7713 5.14119Z'
      stroke='#2260FF'
      strokeWidth={2}
      strokeLinecap='round'
    />
    <path
      d='M19 19.938C19 16.752 18.4571 13.566 12.4857 13.566H6.24286C2.17143 13.566 4.50852e-07 14.8935 0 19.938C-5.2419e-08 20.5245 0.486073 21 1.08568 21L17.9143 21C18.5139 21 19 20.5245 19 19.938Z'
      stroke='#2260FF'
      strokeWidth={2}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon8);
export { Memo as VectorIcon8 };
