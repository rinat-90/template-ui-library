import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RsvpButton } from '../components';

export default {
  title: 'Example/RsvpButton',
  component: RsvpButton,
  argTypes: {},
} as ComponentMeta<typeof RsvpButton>;

const Template: ComponentStory<typeof RsvpButton> = (args) => <RsvpButton {...args} />;

export const DefaultRsvpNo = Template.bind({});
DefaultRsvpNo.args = {
  text: 'out.',
  btnType: 'no',
};

export const DefaultRsvpYes = Template.bind({});
DefaultRsvpYes.args = {
  text: 'in.',
  btnType: 'yes',
};

export const ActiveRsvpNo = Template.bind({});
ActiveRsvpNo.args = {
  text: 'out.',
  btnType: 'no',
  rsvpStatus: 'no',
};

export const ActiveRsvpYes = Template.bind({});
ActiveRsvpYes.args = {
  text: 'in.',
  btnType: 'yes',
  rsvpStatus: 'yes',
};

export const ActiveRsvpNoNoText = Template.bind({});
ActiveRsvpNoNoText.args = {
  text: 'in.',
  btnType: 'no',
  rsvpStatus: 'no',
  hideText: true,
};

export const ActiveRsvpYesText = Template.bind({});
ActiveRsvpYesText.args = {
  text: 'in.',
  btnType: 'yes',
  rsvpStatus: 'yes',
  hideText: true,
};

export const DefaultRsvpNoText = Template.bind({});
DefaultRsvpNoText.args = {
  text: 'in.',
  btnType: 'no',
  hideText: true,
};

export const DefaultRsvpYesText = Template.bind({});
DefaultRsvpYesText.args = {
  text: 'in.',
  btnType: 'yes',
  hideText: true,
};

