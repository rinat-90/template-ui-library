import React from 'react';

import {TSVGProps} from "../../../types";

export const PlusIcon = ({ className, color }: TSVGProps): JSX.Element => (
  <svg className={className} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M11.9 1.85625C11.9 0.917366 11.1389 0.15625 10.2 0.15625C9.26112 0.15625 8.5 0.917366 8.5 1.85625V8.65625H1.7C0.761116 8.65625 0 9.41737 0 10.3562C0 11.2951 0.761116 12.0563 1.7 12.0563H8.5V18.8563C8.5 19.7951 9.26112 20.5563 10.2 20.5563C11.1389 20.5563 11.9 19.7951 11.9 18.8563V12.0563H18.7C19.6389 12.0563 20.4 11.2951 20.4 10.3562C20.4 9.41737 19.6389 8.65625 18.7 8.65625H11.9V1.85625Z" fill={color} />
  </svg>
);
