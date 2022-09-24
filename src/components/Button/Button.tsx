import './Button.scss'
import React, {ReactElement, ReactNode} from 'react';
import classNames from "classnames";

type TButtonProps = {
  primary?: boolean;
  label?: string
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  backgroundColor?: string
  color?: string
  rounded?: boolean
  round?: boolean
  outlined?: boolean
  inset?: boolean
  icon?: boolean
  children?: ReactNode,
  hideText?: boolean
};
const Button = ({
  primary = false,
  size = 'medium',
  rounded = false,
  round = false,
  outlined = false,
  inset = false,
  icon = false,
  hideText = false,
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
        'button-rounded': rounded || hideText,
        'button-round': round,
        'button-outlined': outlined,
        'button-inset': inset,
      })}
      style={{ backgroundColor, color } }
      {...props}
    >
      {icon && <>{props.children}</>}
      {label && !hideText && <span>{label}</span>}
    </button>
  );
};

export default Button;
