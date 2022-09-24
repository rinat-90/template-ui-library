import './RsvpButton.scss';
import React, {ReactElement} from 'react';
import Button from '../Button';
import classNames from 'classnames';
import {TRsvpStatus} from '../../types';

type TRsvpButtonProps = {
  text: string,
  rsvpStatus: TRsvpStatus
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  btnType: TRsvpStatus
  hideText?: boolean
};
const RsvpButton = ({
  text,
  rsvpStatus = TRsvpStatus.unknown,
  btnType = TRsvpStatus.unknown,
  disabled,
  hideText,
}: TRsvpButtonProps): ReactElement => {

  return <div className={classNames('rsvp-btn', {
    'rsvp-yes': btnType === TRsvpStatus.yes,
    'rsvp-no': btnType === TRsvpStatus.no,
    'active': btnType === TRsvpStatus.yes
      ? rsvpStatus === TRsvpStatus.yes
      : rsvpStatus === TRsvpStatus.no,
  })}>
    <Button icon inset rounded={!hideText} round={hideText} label={text} hideText={hideText} disabled={disabled}>
      <i className='rsvp-btn-icon' />
    </Button>
  </div>;
};

export default RsvpButton;
