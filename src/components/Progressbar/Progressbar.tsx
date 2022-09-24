import './Progressbar.scss';
import React, {ReactElement} from 'react';

type TProgressbarProps = {
  currentValue: number
  maxValue: number
};
const Progressbar = (props: TProgressbarProps): ReactElement => {
  const count = props.currentValue.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const progress = (props.currentValue * 100) / props.maxValue;

  return (
    <div className="progressbar">
      <div className='progressbar-inner'>
        <div style={{ width: `${progress}%` }} />
      </div>
      {<div className='progressbar-count'>{count}</div>}
    </div>
  );
};

export default Progressbar;
