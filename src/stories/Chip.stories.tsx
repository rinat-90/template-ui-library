import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chip } from '../components';
import {iconMap} from '../components/Icon/icon-map';

export default {
  title: 'Example/Chip',
  component: Chip,
  argTypes: {
    icon: {
      options: Object.keys(iconMap),
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const ExampleChip= Template.bind({});
ExampleChip.args = { label: 'add' };
