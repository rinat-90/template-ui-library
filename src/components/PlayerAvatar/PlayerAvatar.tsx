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
const PlayerAvatar = (props: TPlayerAvatarProps): ReactElement => {

  const initials = `${props.firstName.charAt(0)}${props.lastName.charAt(0)}`;
  const { unreadMessageCount } = props;

  const avatarClass = classNames(
    'player-avatar',
    {
      confirmed: props.status === 'yes',
      no: props.status === 'no',
    },
    { 'add-margin': props.addMargin },
    {
      tiny: props.size === 'tiny',
      small: props.size === 'small',
      medium: props.size === 'medium',
      large: props.size === 'large',
    },
    { 'pointer': props.onClick !== undefined},
  );

  const containerClass = classNames('player-avatar-container', {
    'align-center': props.alignCenter,
  });

  if (process?.env?.NODE_ENV === 'production' || props?.disableChatOnClick) {
    return (
      <div
        className={containerClass} >
        <div className={avatarClass} onClick={props.onClick}>
          {props.avatar ? (
            <img src={props.avatar} alt={`${props.firstName}-${props.lastName}-avatar`} />
          ) : (
            initials
          )}
        </div>
        {props.isCaptain ? (
          <p className={classNames('captain', { 'margin-right': props.addMargin })}>C</p>
        ) : null}
        {props.isMvp && <div className={classNames('mvp', { 'margin-right': props.addMargin })} />}
        {props.nameCaption && (
          <div className='player-name' onClick={props.onPlayerNameClick}>
            {props.firstName.charAt(0)} {props.lastName}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className={containerClass}>
        <div className={avatarClass} onClick={props.onClick}>
          {props.avatar ? (
            <img src={props.avatar} alt={`${props.firstName}-${props.lastName}-avatar`} />
          ) : (
            initials
          )}
        </div>
        { unreadMessageCount && unreadMessageCount > 0 ? <i className='notification-count'>
          {unreadMessageCount}
        </i> : null}
        {props.isCaptain ? <p className={classNames('captain', { 'margin-right': props.addMargin })}>C</p> : null}
        {props.isMvp && <div className={classNames('mvp', { 'margin-right': props.addMargin })} />}
        {props.nameCaption && (
          <div className={`player-name ${props.size}`} onClick={props.onPlayerNameClick}>
            {props.firstName} {props.lastName.charAt(0)}
          </div>
        )}
      </div>
    );
  }
};

export default PlayerAvatar;
