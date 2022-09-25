import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
import {MoreIcon} from '../Icon/svg';


export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  primary: true,
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  primary: true,
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  primary: true,
  size: 'large',
};

export const Rounded = Template.bind({});
Rounded.args = {
  label: 'Button',
  primary: true,
  rounded: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Button',
  primary: true,
  outlined: true,
};

export const Inset = Template.bind({});
Inset.args = {
  label: 'Button',
  inset: true,
};

export const TextIcon = Template.bind({});
TextIcon.args = {
  label: 'button',
  icon: true,
  children: <MoreIcon color='#8917F2' />,
};

export const Icon = Template.bind({});
Icon.args = {
  icon: true,
  round: true,
  hideText: true,
  children: <MoreIcon color='#8917F2' />,
};

