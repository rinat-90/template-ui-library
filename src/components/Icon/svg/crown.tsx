import React from 'react';

import {TSVGProps} from "../../../types";

export const CrownIcon = ({ className, color }: TSVGProps): JSX.Element => (
  <svg className={className} width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 0.0605469L4.71997 4.78052L9.50052 0L14.2811 4.78052L19 0.0615692V8.93823C19 10.5951 17.6569 11.9382 16 11.9382H3C1.34314 11.9382 0 10.5951 0 8.93823V0.0605469ZM17 4.87781V8.93823C17 9.49048 16.5523 9.93823 16 9.93823H3C2.44771 9.93823 2 9.49048 2 8.93823V4.87683L4.71997 7.5968L9.50052 2.81628L14.2811 7.5968L17 4.87781Z" fill={color} />
  </svg>
);
