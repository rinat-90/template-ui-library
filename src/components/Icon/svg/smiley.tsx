import React from 'react';
import {TSVGProps} from "../../../types";

export const SmileyIcon = ({ className, color, ...props }: TSVGProps): JSX.Element => (
  <svg {...props} className={className} version="1.1" id="smiley" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="25 25 50 50" xmlSpace="preserve">
    <g>
      <polygon fill={color} points="34.61,29.84 25.73,32.66 32.24,48.54 41.18,45.8 "/>
      <polygon fill={color} points="54.97,42.75 48.47,26.91 39.56,29.56 46.08,45.49 "/>
      <path fill={color} d="M38.83,64.54l3.45,8.56c21.65-8.79,30.35-20.95,31.99-44.75l-9.21-0.61C63.66,48.06,57.25,57.06,38.83,64.54z"
      />
    </g>
  </svg>
);
