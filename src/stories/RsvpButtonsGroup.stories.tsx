import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RsvpButtonsGroup } from '../components';

export default {
  title: 'Example/RsvpButtonsGroup',
  component: RsvpButtonsGroup,
  argTypes: {
  },
} as ComponentMeta<typeof RsvpButtonsGroup>;

const Template: ComponentStory<typeof RsvpButtonsGroup> = (args) => <RsvpButtonsGroup {...args} />;

export const DefaultRsvpButtonsGroup = Template.bind({});
DefaultRsvpButtonsGroup.args = {
  rsvpStatus: 'yes',
};


