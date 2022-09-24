import React from 'react';

import {TSVGProps} from '../../../types';

export const CrossIcon = ({ className, color }: TSVGProps): JSX.Element => (
  <svg className={className} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.1768 2.28809L14.3536 2.11128L14.1767 1.93451L13.065 0.823192L12.8883 0.646471L12.7115 0.82323L7.5 6.03512L2.28836 0.823228L2.11161 0.646463L1.93483 0.823202L0.823244 1.93452L0.646432 2.11129L0.823217 2.28809L6.03472 7.49997L0.82325 12.7098L0.646561 12.8865L0.823082 13.0633L1.93466 14.1766L2.11145 14.3537L2.28836 14.1768L7.50003 8.96485L12.7115 14.1748L12.8883 14.3514L13.065 14.1748L14.1767 13.0634L14.3536 12.8866L14.1767 12.7098L8.96516 7.49997L14.1768 2.28809Z" fill={color} stroke={color} strokeWidth="0.5"/>
  </svg>
);