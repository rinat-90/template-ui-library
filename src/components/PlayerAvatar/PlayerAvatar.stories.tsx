import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PlayerAvatar from './PlayerAvatar';

export default {
  title: 'Components/PlayerAvatar',
  component: PlayerAvatar,
  argTypes: {},
} as ComponentMeta<typeof PlayerAvatar>;

const Template: ComponentStory<typeof PlayerAvatar> = (args) => <PlayerAvatar {...args} />;

export const DefaultPlayerAvatar= Template.bind({});
DefaultPlayerAvatar.args = {
  firstName: 'RINAT',
  lastName: 'IBRAGIMOV',
  memberId: 0,
  avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.CsCEiIgcxJ54PXFJ-Ep5nQHaHa%26pid%3DApi&f=1&ipt=786525369c14b1a8ccaa15df43811e4f15b80f64c296406b89027bd5fb010d28&ipo=images',
};

