import React from 'react';
import {TSVGProps} from '../../../types';

export const AddIcon = ({ className, color }: TSVGProps): JSX.Element => (
  <svg className={className} width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9699 0.030062L12.03 22.03M1.00003 11.0601L22.9999 11" stroke={color} strokeWidth="2"/>
  </svg>
);
