import './svg.scss';

import React from 'react';

import {TSVGProps} from "../../../types";

type THeartIconProps = TSVGProps & {
  //Fill svg with $brand-color-primary if heart icon is active
  fill: boolean;
};

export const HeartIcon = ({
  className,
  color = '#D6DE23',
  fill = false,
}: THeartIconProps): JSX.Element => (
  <svg
    id='heart'
    xmlns='http://www.w3.org/2000/svg'
    width='15.556'
    height='14'
    viewBox='0 0 15.556 14'
    className={className}
  >
    <g id='_Color' data-name='Color' fill={fill ? color : 'none'}>
      <path
        d='M7.778,14,6.65,12.993C2.644,9.43,0,7.08,0,4.2A4.2,4.2,0,0,1,4.278,0a4.7,4.7,0,0,1,3.5,1.595A4.7,4.7,0,0,1,11.278,0a4.2,4.2,0,0,1,4.278,4.2c0,2.884-2.644,5.234-6.65,8.8Z'
        stroke='none'
        fill={fill ? color : 'none'}
      />
      <path
        d='M 7.779675483703613 12.99618911743164 L 8.437277793884277 12.4132604598999 C 12.27211761474609 8.994870185852051 14.80555725097656 6.736549854278564 14.80555725097656 4.196189880371094 C 14.80555725097656 2.263750076293945 13.25596809387207 0.75 11.27777767181396 0.75 C 10.16717720031738 0.75 9.070487976074219 1.249519944190979 8.344138145446777 2.086220026016235 L 7.777777671813965 2.738620042800903 L 7.211417675018311 2.086220026016235 C 6.485067844390869 1.249519944190979 5.388377666473389 0.75 4.277777671813965 0.75 C 2.299587726593018 0.75 0.7499976754188538 2.263750076293945 0.7499976754188538 4.196189880371094 C 0.7499976754188538 6.741079807281494 3.291497707366943 9.001749992370605 7.138537883758545 12.4237003326416 L 7.779675483703613 12.99618911743164 M 7.777777671813965 14 L 6.649997711181641 12.992919921875 C 2.644447565078735 9.429969787597656 -2.328185928490711e-06 7.0801100730896 -2.328185928490711e-06 4.196189880371094 C -2.328185928490711e-06 1.846320033073425 1.882217645645142 -8.881784197001252e-16 4.277777671813965 -8.881784197001252e-16 C 5.631107807159424 -8.881784197001252e-16 6.929997444152832 0.6179800033569336 7.777777671813965 1.594550013542175 C 8.625557899475098 0.6179800033569336 9.924448013305664 -8.881784197001252e-16 11.27777767181396 -8.881784197001252e-16 C 13.67333793640137 -8.881784197001252e-16 15.55555725097656 1.846320033073425 15.55555725097656 4.196189880371094 C 15.55555725097656 7.0801100730896 12.91110801696777 9.429969787597656 8.905557632446289 13.00055027008057 L 7.777777671813965 14 Z'
        stroke='none'
        fill={fill ? color : 'black'}
      />
    </g>
  </svg>
);
