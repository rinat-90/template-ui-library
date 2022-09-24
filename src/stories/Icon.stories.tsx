import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {iconMap} from '../components/Icon/icon-map';
import { Icon } from '../components';

export default {
  title: 'Example/Icons',
  component: Icon,
  argTypes: {
    color: { control: 'color' },
    name: {
      options: Object.keys(iconMap),
      control: { type: 'select' },
    },

  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const ExampleIcon = Template.bind({});
ExampleIcon.args = { name: 'add', color: '#8917F2' };
