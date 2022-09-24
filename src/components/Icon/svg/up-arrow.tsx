import './svg.scss';

import React from 'react';

import {TSVGProps} from "../../../types";
import classnames from 'classnames';

type TUpArrowIconProps = TSVGProps & {
  open: boolean,
};

export const UpArrowIcon = ({ color = '#231F20', width = '12', height = '7', open }: TUpArrowIconProps): JSX.Element => {
  const className = classnames('arrow-icon', { open });

  return (
    <svg className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.1574 5.758L6.00009 1L0.84375 5.758" stroke={color} strokeWidth="0.75" strokeMiterlimit="10"/>
    </svg>
  );
};
