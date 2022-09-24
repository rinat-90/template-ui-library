import './RsvpButtonsGroup.scss';
import React, {ReactElement} from 'react';
import classNames from 'classnames';
import RsvpButton from '../RsvpButton';
import {TRsvpStatus} from '../../types';

type TRsvpButtonsGroupProps = {
  disabled?: boolean;
  handleRsvpIn?: (e: React.SyntheticEvent<HTMLElement, Event>) => void;
  handleRsvpOut?: (e: React.SyntheticEvent<HTMLElement, Event>) => void;
  rsvpStatus: TRsvpStatus;
  isLoading?: boolean;
  size?: 'small' | 'medium' | 'large';
  hideButtonsText?: boolean
};
const RsvpButtonsGroup = (props: TRsvpButtonsGroupProps): ReactElement => {

  return <section className={classNames(
    'rsvp-buttons',
    {
      'disabled': props.disabled,
    })}
  >
    {props.isLoading ? (
      <div className='loading-container'>
        Loading...
      </div>
    ) : (
      <div className={classNames('buttons-wrapper', {
        'rounded-btn': props.hideButtonsText,
      })}>
        <RsvpButton
          onClick={props.handleRsvpIn}
          rsvpStatus={props.rsvpStatus}
          disabled={props.rsvpStatus === TRsvpStatus.yes}
          text={'in'}
          btnType={TRsvpStatus.yes}
          hideText={props.hideButtonsText}
        />
        <RsvpButton
          onClick={props.handleRsvpOut}
          rsvpStatus={props.rsvpStatus}
          disabled={props.rsvpStatus === TRsvpStatus.no}
          text={'no'}
          btnType={TRsvpStatus.no}
          hideText={props.hideButtonsText}
        />
      </div>
    )}
  </section>;
};

export default RsvpButtonsGroup;
