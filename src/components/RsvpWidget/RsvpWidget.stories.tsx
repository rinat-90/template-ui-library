import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {TRsvpStatus} from '../../types';
import RsvpWidget from './RsvpWidget';

export default {
  title: 'Components/RsvpWidget',
  component: RsvpWidget,
  argTypes: {},
} as ComponentMeta<typeof RsvpWidget>;

const Template: ComponentStory<typeof RsvpWidget> = (args) => <RsvpWidget {...args} />;

export const DefaultRsvpWidget = Template.bind({});
DefaultRsvpWidget.args = {
  rsvpStatus: TRsvpStatus.yes,
  attendanceCount: 3,
  rosterCount: 12,
};


