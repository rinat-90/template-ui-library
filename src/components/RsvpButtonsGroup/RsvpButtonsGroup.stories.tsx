import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {TRsvpStatus} from '../../types';
import RsvpButtonsGroup from './RsvpButtonsGroup';


export default {
  title: 'Example/RsvpButtonsGroup',
  component: RsvpButtonsGroup,
  argTypes: {},
} as ComponentMeta<typeof RsvpButtonsGroup>;

const Template: ComponentStory<typeof RsvpButtonsGroup> = (args) => <RsvpButtonsGroup {...args} />;

export const DefaultRsvpButtonsGroup = Template.bind({});
DefaultRsvpButtonsGroup.args = {
  rsvpStatus: TRsvpStatus.no,
};



