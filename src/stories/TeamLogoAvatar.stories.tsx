import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TitleDivider } from '../components';

export default {
  title: 'Example/TitleDivider',
  component: TitleDivider,
  argTypes: {
    // backgroundColor: { control: 'color' },
    // color: { control: 'color' },
  },
} as ComponentMeta<typeof TitleDivider>;

const Template: ComponentStory<typeof TitleDivider> = (args) => <TitleDivider {...args} />;

export const DefaultTitleDivider = Template.bind({});
DefaultTitleDivider.args = {
  title: 'PLAYED',
};

