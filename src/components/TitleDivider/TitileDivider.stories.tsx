import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TeamLogoAvatar from '../TeamLogoAvatar';


export default {
  title: 'Example/TeamLogoAvatar',
  component: TeamLogoAvatar,
  argTypes: {},
} as ComponentMeta<typeof TeamLogoAvatar>;

const Template: ComponentStory<typeof TeamLogoAvatar> = (args) => <TeamLogoAvatar {...args} />;

export const DefaultTeamLogoAvatar = Template.bind({});
DefaultTeamLogoAvatar.args = {
  teamName: 'GOTHEM CITY',
  logoSrc: 'https://wallpapercave.com/wp/wp7175726.png',
};

