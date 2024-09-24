import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 57 57' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.43009 3.9274C15.0091 5.57754 22.5198 14.0216 27.8063 23.1028C30.7322 28.2147 33.1995 33.6609 37.0334 38.0193C39.8787 41.272 43.2118 44.0026 46.8715 46.4226C49.3145 48.0242 51.9018 49.448 55.1443 49.9088C53.3719 50.1667 51.6454 50.0779 50.0325 49.7772C45.2314 48.7879 41.1189 46.6343 37.365 44.0365C33.6302 41.4264 30.5827 37.8963 28.2157 33.9582C25.902 30.1378 23.954 25.9889 21.6854 22.206C17.1515 14.6196 11.6488 7.90697 3.43009 3.9274Z'
      fill='#2260FF'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
