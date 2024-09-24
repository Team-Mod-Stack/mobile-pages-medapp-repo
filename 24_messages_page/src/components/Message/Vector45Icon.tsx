import { memo, SVGProps } from 'react';

const Vector45Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.83846 0.82667L0.897711 11.6172C-0.243661 12.9947 -0.62399 15.3051 1.75419 17.0635C4.01346 18.7339 6.20122 17.945 7.4377 16.4527L17.5198 4.28465C18.2807 3.36631 18.2093 1.83254 16.7824 0.777528C14.9987 -0.541242 13.7622 0.0254273 13.0013 0.943768L3.01428 12.997C2.72894 13.3414 2.39607 14.206 3.34734 14.9093C4.29861 15.6126 5.22602 15.1876 5.51137 14.8433L12.4547 6.46341'
      stroke='#2260FF'
      strokeWidth={1.5}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(Vector45Icon);
export { Memo as Vector45Icon };
