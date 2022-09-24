import classNames from 'classnames';
import React, { ReactElement } from 'react';

import './TeamLogoAvatar.scss';

export type TTextAvatarProps = {
  teamName: string,
  logoSrc?: string,
  addMargin?: boolean,
  size?: 'small' | 'medium' | 'large',
  onClick?: () => void,
};

const DEFAULT_TEAM_LOGO_SRC = 'https://storage.googleapis.com/images.bantr.community/stock/Team.svg';

const TeamLogoAvatar = (props: TTextAvatarProps): ReactElement => {

  const classes = classNames(
    'text-logo-avatar',
    { 'add-margin': props.addMargin },
    {
      small: props.size === 'small',
      medium: props.size === 'medium',
      large: props.size === 'large',
    },
    { cursor: process?.env?.NODE_ENV === 'production' },
  );

  const imgClasses = classNames(
    'text-logo-avatar-img',
    'badge',
    { default: props.logoSrc === DEFAULT_TEAM_LOGO_SRC },
  );

  return process?.env?.NODE_ENV === 'production' ? (
    <div className={classes}>
      {
        props.logoSrc ?
          <img className={imgClasses} src={props.logoSrc} alt={`${props.teamName} logo`} /> :
          <p>{props.teamName.slice(0, 2)}</p>
      }
    </div>
  ) : (
    <div className={classes} onClick={props.onClick}>
      {
        props.logoSrc ?
          <img className={imgClasses} src={props.logoSrc} alt={`${props.teamName} logo`} /> :
          <p>{props.teamName.slice(0, 2)}</p>
      }
    </div>
  );
};

export default TeamLogoAvatar;
