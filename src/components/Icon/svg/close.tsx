import './svg.scss';

import React from 'react';
import classNames from 'classnames';

import {TSVGProps} from "../../../types";

type TCloseIconProps = TSVGProps & {
  hover?: boolean
};

export const CloseIcon = ({ className, color = '#221f20', hover = true }: TCloseIconProps): JSX.Element => (
  <div className={classNames('close-icon', { hover })}>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16">
      <g id="_X_out" data-name="&apos;X&apos; out" transform="translate(0.325 0.188)">
        <line id="Line_356" data-name="Line 356" x2="9.196" y2="15.928" fill="none" stroke={color} strokeWidth="0.75" opacity="0.8"/>
        <line id="Line_357" data-name="Line 357" x1="9.196" y2="15.928" fill="none" stroke={color} strokeWidth="0.75" opacity="0.8"/>
      </g>
    </svg>
  </div>
);
