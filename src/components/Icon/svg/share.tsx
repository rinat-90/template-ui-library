import React from 'react';

import {TSVGProps} from '../../../types';

export const ShareIcon = ({ className, color = '#221f1f', height = '13.497', width = '13.412'}: TSVGProps): JSX.Element => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
    <g id="Share" transform="translate(0.375 0.253)">
      <g id="Group_3383" data-name="Group 3383" transform="translate(1091.245 -850.76) rotate(90)">
        <path id="Path_1090" data-name="Path 1090" d="M372.992,1705.43v-2.157a5.808,5.808,0,0,1,6.13-5.87h5.447" transform="translate(-841.426 1464.237) rotate(-90)" fill="none" stroke={color} strokeWidth="0.75"/>
        <g id="Group_3363" data-name="Group 3363" transform="translate(49.189 -1396.598)">
          <path id="Path_139" data-name="Path 139" d="M812.005,2480.072l-5.217-4.758-5.217,4.758" fill="none" stroke={color} strokeWidth="0.75"/>
        </g>
      </g>
    </g>
  </svg>
);
