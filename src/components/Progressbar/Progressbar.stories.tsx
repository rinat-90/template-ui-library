import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Progressbar from './Progressbar';

export default {
  title: 'Example/Progressbar',
  component: Progressbar,
  argTypes: {},
} as ComponentMeta<typeof Progressbar>;

const Template: ComponentStory<typeof Progressbar> = (args) => <Progressbar {...args} />;

export const DefaultProgressbar = Template.bind({});
DefaultProgressbar.args = {
  maxValue: 100,
  currentValue: 30,
};

