import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chip } from '../components';

export default {
  title: 'Example/Chip',
  component: Chip,
  argTypes: {
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const ExampleChip= Template.bind({});
ExampleChip.args = { label: 'add' };
