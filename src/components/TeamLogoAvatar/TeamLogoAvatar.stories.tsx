import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TitleDivider from '../TitleDivider';


export default {
  title: 'Components/TitleDivider',
  component: TitleDivider,
  argTypes: {},
} as ComponentMeta<typeof TitleDivider>;

const Template: ComponentStory<typeof TitleDivider> = (args) => <TitleDivider {...args} />;

export const DefaultTitleDivider = Template.bind({});
DefaultTitleDivider.args = {
  title: 'PLAYED',
};

