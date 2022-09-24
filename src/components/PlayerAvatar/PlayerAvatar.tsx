import './PlayerAvatar.scss';
import React, {ReactElement} from 'react';
import classNames from 'classnames';

type TPlayerAvatarProps = {
  firstName: string;
  lastName: string;
  memberId: number;
  status?: 'yes' | 'no';
  avatar: string;
  isCaptain?: boolean;
  isMvp?: boolean;
  addMargin?: boolean;
  size?: 'tiny' | 'small' | 'medium' | 'large';
  onClick?: () => void;
  nameCaption?: boolean;
  onPlayerNameClick?: (e: React.MouseEvent<HTMLElement>) => void;
  alignCenter?: boolean;
  disableChatOnClick?: boolean;
  unreadMessageCount?: number;
};
const PlayerAvatar = ({
  firstName,
  lastName,
  status,
  avatar,
  isCaptain,
  isMvp,
  addMargin,
  size,
  onClick,
  nameCaption,
  onPlayerNameClick,
  alignCenter,
  disableChatOnClick,
  unreadMessageCount,
}: TPlayerAvatarProps): ReactElement => {

  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;

  const avatarClass = classNames(
    'player-avatar',
    {
      confirmed: status === 'yes',
      no: status === 'no',
    },
    { 'add-margin': addMargin },
    {
      tiny: size === 'tiny',
      small: size === 'small',
      medium: size === 'medium',
      large: size === 'large',
      capitan: isCaptain,
      mvp: isMvp,
    },
    { 'pointer': onClick !== undefined},
  );

  const containerClass = classNames('player-avatar-container', {
    'align-center': alignCenter,
  });

  if (process?.env?.NODE_ENV === 'production' || disableChatOnClick) {
    return (
      <div
        className={containerClass} >
        <div className={avatarClass} onClick={onClick}>
          {avatar ? (
            <img src={avatar} alt={`${firstName}-${lastName}-avatar`} />
          ) : (
            initials
          )}
        </div>
        {isMvp && <div className={classNames('mvp', { 'margin-right': addMargin })} />}
        {nameCaption && (
          <div className='player-name' onClick={onPlayerNameClick}>
            {firstName.charAt(0)} {lastName}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className={containerClass}>
        <div className={avatarClass} onClick={onClick}>
          {avatar ? (
            <img src={avatar} alt={`${firstName}-${lastName}-avatar`} />
          ) : (
            initials
          )}
        </div>
        { unreadMessageCount && unreadMessageCount > 0 ? <i className='notification-count'>
          {unreadMessageCount}
        </i> : null}
        {nameCaption && (
          <div className={`player-name ${size}`} onClick={onPlayerNameClick}>
            {firstName} {lastName.charAt(0)}
          </div>
        )}
      </div>
    );
  }
};

export default PlayerAvatar;
