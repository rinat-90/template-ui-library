import './StatButton.scss';
import React, {ReactElement} from 'react';
import Button from '../Button';
import classNames from 'classnames';
import {TStats} from '../../types';

type TStatButtonProps = {
  onClick?: () => void;
  type: TStats
};
const StatButton = ({
  onClick,
  type,
}: TStatButtonProps): ReactElement => {

  const eventStatsButtonText = (): string => {
    if (type === TStats.SCORE) {
      return 'add score';
    }
    if (type === TStats.GOALS || type === TStats.ASSISTS) {
      return 'track stats';
    }
    if (type === TStats.POTM) {
      return 'vote 4 potm';
    }

    return  '';
  };

  return <div className='stat-button'>
    <Button onClick={onClick} label={eventStatsButtonText()} rounded icon>
      <i className={classNames('stat-btn-icon', {
        'face-icon': type !== TStats.POTM,
        'medal-icon': type === TStats.POTM,
      })} />
    </Button>
  </div>;
};

export default StatButton;
