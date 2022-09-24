import './Chip.scss';
import React, {ReactElement} from 'react';
import classNames from 'classnames';

type TChipProps = {
  active?: boolean
  color?: string
  backgroundColor?: string
  outlined?: boolean
  pill?: boolean
  label?: string
  size?: 'sm' | 'md' | 'lg'
  activeClass?: string
};
const Chip = (props: TChipProps): ReactElement => {
  return (
    <div className={classNames('chip', {
      'active': !props.activeClass,
      'pill': props.pill,
      'outlined': props.outlined,
      'sm': props.size === 'sm',
      'md': props.size === 'md',
      'lg': props.size === 'lg',
    })}
    style={{ color: props.color, backgroundColor: props.backgroundColor }}
    >
      {props.label}
    </div>
  );
};

export default Chip;
