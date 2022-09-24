import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RsvpButton } from '../components';
import {MoreIcon} from "./assets/svg/more";

export default {
  title: 'Example/RsvpButton',
  component: RsvpButton,
  argTypes: {
    // backgroundColor: { control: 'color' },
    // color: { control: 'color' },
  },
} as ComponentMeta<typeof RsvpButton>;

const Template: ComponentStory<typeof RsvpButton> = (args) => <RsvpButton {...args} />;

export const DefaultRsvpOut = Template.bind({});
DefaultRsvpOut.args = {
  text: 'out.',
  btnType: 'no'
};

export const DefaultRsvpIn = Template.bind({});
DefaultRsvpIn.args = {
  text: 'in.',
  btnType: 'yes'
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
  rsvpStatus: 'yes'
};

