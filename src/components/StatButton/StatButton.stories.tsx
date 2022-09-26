import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {TStats} from '../../types';
import StatButton from './StatButton';

export default {
  title: 'Example/StatButton',
  component: StatButton,
  argTypes: {},
} as ComponentMeta<typeof StatButton>;

const Template: ComponentStory<typeof StatButton> = (args) => <StatButton {...args} />;

export const DefaultStatButton = Template.bind({});
DefaultStatButton.args = {
  type: TStats.SCORE,
};

