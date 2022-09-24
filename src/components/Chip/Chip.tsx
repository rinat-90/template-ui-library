import './Chip.scss';
import React, {ReactElement} from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

type TChipProps = {
  active?: boolean
  color?: string
  backgroundColor?: string
  outlined?: boolean
  pill?: boolean
  label?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  activeClass?: string
  icon?: string
  iconLeft?: boolean
  iconRight?: boolean
  iconColor?: string
};
const Chip = ({
  active,
  color,
  backgroundColor,
  outlined,
  pill,
  label,
  icon,
  size ='sm',
  activeClass,
  iconLeft = true,
  iconRight = false,
  iconColor = '#000',
}: TChipProps): ReactElement => {
  return (
    <div className={classNames('chip', {
      'chip-icon': icon,
      'active': !activeClass && active,
      'pill': pill,
      'outlined': outlined,
      'sm': size === 'sm',
      'md': size === 'md',
      'lg': size === 'lg',
    })}
    style={{ color: color, backgroundColor: backgroundColor }}
    >
      {icon && iconLeft && !iconRight && <Icon name={icon} color={iconColor} />}
      {label}
      {icon && iconRight && <Icon name={icon} color={iconColor} />}
    </div>
  );
};

export default Chip;
