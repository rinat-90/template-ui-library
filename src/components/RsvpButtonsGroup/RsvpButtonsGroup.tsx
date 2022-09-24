import './RsvpButtonsGroup.scss';
import React, {ReactElement} from 'react';
import classNames from 'classnames';
import RsvpButton from '../RsvpButton';

type TRsvpButtonsGroupProps = {
  disabled?: boolean;
  handleRsvpIn?: (e: React.SyntheticEvent<HTMLElement, Event>) => void;
  handleRsvpOut?: (e: React.SyntheticEvent<HTMLElement, Event>) => void;
  rsvpStatus: 'yes' | 'no';
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
          disabled={props.rsvpStatus === 'yes'}
          text={'in'}
          btnType={'yes'}
          hideText={props.hideButtonsText}
        />
        <RsvpButton
          onClick={props.handleRsvpOut}
          rsvpStatus={props.rsvpStatus}
          disabled={props.rsvpStatus === 'no'}
          text={'no'}
          btnType={'no'}
          hideText={props.hideButtonsText}
        />
      </div>
    )}
  </section>;
};

export default RsvpButtonsGroup;
