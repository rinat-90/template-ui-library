import React from 'react';

import {TSVGProps} from '../../../types';

export const MinusIcon = ({ className, color }: TSVGProps): JSX.Element => (
  <svg className={className} width="21" height="4" viewBox="0 0 21 4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20.4" height="3.4" rx="1.7" fill={color}/>
  </svg>
);
