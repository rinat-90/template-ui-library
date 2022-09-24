import './RsvpWidget.scss';
import React, {ReactElement} from 'react';
import Progressbar from '../Progressbar';
import RsvpButtonsGroup from '../RsvpButtonsGroup';


type TRsvpWidgetProps = {
  disabled?: boolean;
  empty?: boolean
  rsvpStatus: 'yes' | 'no'
  handleRsvpIn?: (e: React.SyntheticEvent<HTMLElement, Event>) => void;
  handleRsvpOut?: (e: React.SyntheticEvent<HTMLElement, Event>) => void;
  attendanceCount: number
  rosterCount: number
  isLoading?: boolean;
};
const RsvpWidget = (props: TRsvpWidgetProps): ReactElement => {

  return <div className='rsvp-widget'>
    <div className="rsvp-widget-wrapper">
      <RsvpButtonsGroup
        isLoading={props.isLoading}
        disabled={props.empty}
        rsvpStatus={props.rsvpStatus}
        handleRsvpIn={props.handleRsvpIn}
        handleRsvpOut={props.handleRsvpOut}
      />
    </div>
    <Progressbar
      currentValue={props.attendanceCount}
      maxValue={props.rosterCount}
    />
  </div>;
};

export default RsvpWidget;
