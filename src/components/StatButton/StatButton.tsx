import './RsvpButton.scss';
import React, {ReactElement} from 'react';
import Button from '../Button';
import classNames from 'classnames';
import {TStats} from '../../types';

type TStatButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type: TStats
};
const StatButton = ({
  onClick,
  type,
}: TStatButtonProps): ReactElement => {

  return <div className={classNames('rsvp-btn', {

  })}>
    <Button rounded  label={'text'}>
      <i className='rsvp-btn-icon' />
    </Button>
  </div>;
};

export default StatButton;
