import './Button.scss'
import React, {ReactElement} from 'react';
import classNames from "classnames";

type TButtonProps = {
  primary?: boolean;
  label: string
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  backgroundColor?: string
  color?: string
  rounded?: boolean
  round?: boolean
  outlined?: boolean
};
const Button = ({
  primary = false,
  size = 'medium',
  rounded = false,
  round = false,
  outlined = false,
  backgroundColor,
  color,
  label,
  ...props
}: TButtonProps): ReactElement => {

  return (
    <button
      type='button'
      className={classNames('button', {
        'button-medium': size === 'medium',
        'button-small': size === 'small',
        'button-large': size === 'large',
        'button-primary': primary,
        'button-rounded': rounded,
        'button-round': round,
        'button-outlined': outlined
      })}
      style={{ backgroundColor, color } }
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
