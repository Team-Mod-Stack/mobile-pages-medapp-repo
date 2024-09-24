import { memo, SVGProps } from 'react';

const Ellipse35Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.0978 2.38055C13.578 0.980524 11.6227 0.146119 9.56034 0.0174681C7.49799 -0.111183 5.45417 0.473758 3.77216 1.67405C2.09015 2.87434 0.872401 4.61687 0.323429 6.60897C-0.225542 8.60108 -0.0722939 10.7214 0.757436 12.6139C1.58717 14.5063 3.04284 16.0556 4.87997 17.0016C6.7171 17.9475 8.82378 18.2325 10.8462 17.8086C12.8686 17.3847 14.6836 16.2778 15.9863 14.6738C17.289 13.0698 18 11.0664 18 9.00001L9 9'
      stroke='#2260FF'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Ellipse35Icon);
export { Memo as Ellipse35Icon };
