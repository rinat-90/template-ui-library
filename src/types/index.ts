import {ReactNode} from 'react';

export type TTabItems = {
  title: string
  icon?: ReactNode
  value: string | number
}

export type TSVGProps = {
  className?: string;
  color?: string;
  height?: string;
  width?: string;
}

export enum TRsvpStatus {
  yes = 'yes',
  no = 'no',
  unknown = 'unknown',
  maybe = 'maybe',
}
