import './RsvpButton.scss'
import React, {ReactElement} from 'react';
import Button from "../Button";
import classNames from "classnames";

type TRsvpButtonProps = {
  text: string,
  rsvpStatus: any
  disabled?: boolean
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  btnType: string
  hideText?: boolean
};
const RsvpButton = ({
    text,
    rsvpStatus = null,
    btnType,
    disabled,
    hideText,
  ...props
}: TRsvpButtonProps): ReactElement => {

  return <div className={classNames('rsvp-btn', {
    'rsvp-yes': btnType === 'yes',
    'rsvp-no': btnType === 'no',
    'active': btnType === 'yes'
      ? rsvpStatus === 'yes'
      : rsvpStatus === 'no'
  })}>
    <Button icon inset rounded label={text}>
      <i className='rsvp-btn-icon' />
    </Button>
  </div>;
};

export default RsvpButton;
