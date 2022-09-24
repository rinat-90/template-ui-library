import React from 'react';

import {TSVGProps} from '../../../types';

export const NextIcon = ({ className, color }: TSVGProps): JSX.Element => (
  <svg className={className} width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.41421 0L0 1.41421L5.65685 7.07107L0 12.7279L1.41421 14.1421L8.48528 7.07107L1.41421 0Z" fill={color} />
    <path d="M10.3432 14V0H12.3432V14H10.3432Z" fill={color} />
  </svg>
);
