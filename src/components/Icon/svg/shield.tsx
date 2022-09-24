import React from 'react';
import {TSVGProps} from "../../../types";

export const ShieldIcon = ({ className, color, ...props }: TSVGProps): JSX.Element => (
  <svg {...props} className={className} fill={color} version="1.1" id="shield" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 25.4">
    <path d="M23.3,0.6c-7.3-0.8-14.8-0.8-22.1,0L0,0.8v7.8c0,7.9,5,14.8,12.1,16.8l0.1,0l0.1,0c7.1-2,12.1-9,12.1-16.8V0.8
    L23.3,0.6z M0.8,1.4l0.5-0.1c7.3-0.8,14.6-0.8,21.9,0l0,0l-17.8,19c-2.9-3.1-4.7-7.3-4.7-11.9V1.4z M12.2,24.6
    c-2.4-0.7-4.5-2-6.3-3.7L23.7,2v6.6C23.7,16,19,22.6,12.2,24.6z"/>
  </svg>
);
