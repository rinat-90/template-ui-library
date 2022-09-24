import './Icon.scss';
import React, {ReactElement} from 'react';
import {iconMap} from './icon-map';

type TIconProps = {
  name: string,
  className?: string;
  color?: string;
  height?: string;
  width?: string;
};
const Icon = (props: TIconProps): ReactElement => {
  return (
    <div className='icon'>
      {iconMap[props.name]({...props})}
    </div>
  );
};

export default Icon;
