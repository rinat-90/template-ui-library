import React from 'react';

import {TSVGProps} from "../../../types";

export const AssistIcon = ({ className, color }: TSVGProps): JSX.Element => (
  <svg className={className} width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.28619 0.501846C6.88815 0.477554 6.49737 0.694229 6.31863 1.07753L2.93768 8.32802C2.70428 8.82863 2.92083 9.4236 3.42135 9.657C3.9219 9.8904 4.51687 9.67384 4.7503 9.17323L5.23892 8.12538H9.33343L9.82205 9.17323C10.0554 9.67384 10.6504 9.8904 11.151 9.657C11.6515 9.4236 11.8681 8.82863 11.6347 8.32802L8.25372 1.07753C8.07498 0.694229 7.68423 0.477554 7.28619 0.501846ZM8.40081 6.12538H6.17153L7.28619 3.735L8.40081 6.12538Z" fill={color} />
    <rect x="0.84375" y="12.5" width="13" height="2" rx="1" fill={color} />
  </svg>
);
