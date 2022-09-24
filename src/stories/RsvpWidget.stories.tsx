import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RsvpWidget } from '../components';

export default {
  title: 'Example/RsvpWidget',
  component: RsvpWidget,
  argTypes: {
    // backgroundColor: { control: 'color' },
    // color: { control: 'color' },
  },
} as ComponentMeta<typeof RsvpWidget>;

const Template: ComponentStory<typeof RsvpWidget> = (args) => <RsvpWidget {...args} />;

export const DefaultRsvpWidget = Template.bind({});
DefaultRsvpWidget.args = {
  rsvpStatus: 'yes',
  attendanceCount: 3,
  rosterCount: 12,
};


