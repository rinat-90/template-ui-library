import React from 'react';

import {TSVGProps} from '../../../types';

export const TargetIcon = ({ className, color }: TSVGProps): JSX.Element => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_4365_38874)">
      <path d="M10.0009 6.54004L6.70703 8.9334L7.96296 12.796H12.0388L13.271 8.9334L10.0009 6.54004Z" fill={color} />
      <path d="M10 2.36967C14.1943 2.36967 17.6303 5.78199 17.6303 10C17.6303 14.218 14.218 17.6303 10 17.6303C5.78199 17.6303 2.36967 14.218 2.36967 10C2.36967 5.78199 5.78199 2.36967 10 2.36967ZM10 0C4.47867 0 0 4.47867 0 10C0 15.5213 4.47867 20 10 20C15.5213 20 20 15.5213 20 10C20 4.47867 15.5213 0 10 0Z" fill={color}  />
    </g>
    <defs>
      <clipPath id="clip0_4365_38874">
        <rect width="20" height="20" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);
