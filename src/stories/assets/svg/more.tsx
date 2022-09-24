import React from 'react';

type TSVGProps = {
  className?: string;
  color?: string;
  height?: string;
  width?: string;
}

export const MoreIcon = ({ className, color }: TSVGProps): JSX.Element => (
  <svg className={className} width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 -8.74228e-08C3.10457 -1.35705e-07 4 0.89543 4 2C4 3.10457 3.10457 4 2 4C0.89543 4 -3.91405e-08 3.10457 -8.74228e-08 2C-1.35705e-07 0.895431 0.89543 -3.91405e-08 2 -8.74228e-08Z" fill={color}/>
    <path d="M8 -3.49691e-07C9.10457 -3.97973e-07 10 0.89543 10 2C10 3.10457 9.10457 4 8 4C6.89543 4 6 3.10457 6 2C6 0.89543 6.89543 -3.01409e-07 8 -3.49691e-07Z" fill={color}/>
    <path d="M14 -6.11959e-07C15.1046 -6.60242e-07 16 0.89543 16 2C16 3.10457 15.1046 4 14 4C12.8954 4 12 3.10457 12 2C12 0.89543 12.8954 -5.63677e-07 14 -6.11959e-07Z" fill={color}/>
  </svg>
);
