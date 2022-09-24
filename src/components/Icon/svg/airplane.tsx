import React from 'react';
import {TSVGProps} from '../../../types';

export const AirplaneIcon = ({ className, color, ...props }: TSVGProps): JSX.Element => (
  <svg {...props} className={className} version="1.1" id="airplane" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill={color}
    viewBox="0 0 19.7 20.3" >
    <path d="M19.7,0L0,10.8l7.5,2.7l0.3,6.8l3.5-5.4l5.7,2.1L19.7,0z M17.7,1.9L7.5,12.7l-5.6-2L17.7,1.9z M8.4,17.9
	l-0.2-4.1l2.3,0.8L8.4,17.9z M8.2,13L18.6,2.1l-2.2,13.8L8.2,13z"/>
  </svg>
);
