import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RsvpButton } from '../components';
import {TRsvpStatus} from '../types';

export default {
  title: 'Example/RsvpButton',
  component: RsvpButton,
  argTypes: {},
} as ComponentMeta<typeof RsvpButton>;

const Template: ComponentStory<typeof RsvpButton> = (args) => <RsvpButton {...args} />;

export const DefaultRsvpNo = Template.bind({});
DefaultRsvpNo.args = {
  text: 'out.',
  btnType: TRsvpStatus.no,
};

export const DefaultRsvpYes = Template.bind({});
DefaultRsvpYes.args = {
  text: 'in.',
  btnType: TRsvpStatus.yes,
};

export const ActiveRsvpNo = Template.bind({});
ActiveRsvpNo.args = {
  text: 'out.',
  btnType: TRsvpStatus.no,
  rsvpStatus: TRsvpStatus.no,
};

export const ActiveRsvpYes = Template.bind({});
ActiveRsvpYes.args = {
  text: 'in.',
  btnType: TRsvpStatus.yes,
  rsvpStatus: TRsvpStatus.yes,
};

export const ActiveRsvpNoNoText = Template.bind({});
ActiveRsvpNoNoText.args = {
  text: 'in.',
  btnType: TRsvpStatus.no,
  rsvpStatus: TRsvpStatus.no,
  hideText: true,
};

export const ActiveRsvpYesText = Template.bind({});
ActiveRsvpYesText.args = {
  text: 'in.',
  btnType: TRsvpStatus.yes,
  rsvpStatus: TRsvpStatus.yes,
  hideText: true,
};

export const DefaultRsvpNoText = Template.bind({});
DefaultRsvpNoText.args = {
  text: 'in.',
  btnType: TRsvpStatus.no,
  hideText: true,
};

export const DefaultRsvpYesText = Template.bind({});
DefaultRsvpYesText.args = {
  text: 'in.',
  btnType: TRsvpStatus.yes,
  hideText: true,
};

