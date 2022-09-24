import React, {ReactElement} from 'react';
import * as Svg from './svg';
import {TSVGProps} from '../../types';

export const iconMap: Record<string, (props: TSVGProps) => ReactElement> = {
  'add': (props: TSVGProps): ReactElement => React.createElement(Svg.AddIcon, {...props}),
  'airplane': (props: TSVGProps): ReactElement => React.createElement(Svg.AirplaneIcon, {...props}),
  'assists': (props: TSVGProps): ReactElement => React.createElement(Svg.AssistIcon, {...props}),
  'buzz': (props: TSVGProps): ReactElement => React.createElement(Svg.BuzzIcon, {...props}),
  'chat': (props: TSVGProps): ReactElement => React.createElement(Svg.ChatIcon, {...props}),
  'close': (props: TSVGProps): ReactElement => React.createElement(Svg.CloseIcon, {...props}),
  'cross': (props: TSVGProps): ReactElement => React.createElement(Svg.CrossIcon, {...props}),
  'crown': (props: TSVGProps): ReactElement => React.createElement(Svg.CrownIcon, {...props}),
  // 'heart': (props: TSVGProps): ReactElement => React.createElement(Svg.HeartIcon, {...props}),
  'minus': (props: TSVGProps): ReactElement => React.createElement(Svg.MinusIcon, {...props}),
  'more': (props: TSVGProps): ReactElement => React.createElement(Svg.MoreIcon, {...props}),
  'next': (props: TSVGProps): ReactElement => React.createElement(Svg.NextIcon, {...props}),
  'plus': (props: TSVGProps): ReactElement => React.createElement(Svg.PlusIcon, {...props}),
  'prev': (props: TSVGProps): ReactElement => React.createElement(Svg.PrevIcon, {...props}),
  'share': (props: TSVGProps): ReactElement => React.createElement(Svg.ShareIcon, {...props}),
  'shield': (props: TSVGProps): ReactElement => React.createElement(Svg.ShieldIcon, {...props}),
  'smallChat': (props: TSVGProps): ReactElement => React.createElement(Svg.SmallChatIcon, {...props}),
  'smiley': (props: TSVGProps): ReactElement => React.createElement(Svg.SmileyIcon, {...props}),
  'target': (props: TSVGProps): ReactElement => React.createElement(Svg.TargetIcon, {...props}),
  'undo': (props: TSVGProps): ReactElement => React.createElement(Svg.UndoIcon, {...props}),
  // 'up-arrow': (props: TSVGProps): ReactElement => React.createElement(Svg.UpArrowIcon, {...props}),
};
