import './Tabs.scss';
import React, { ReactElement } from 'react';
import classnames from 'classnames';
import {TTabItems} from "../../types";

export type TTabsProps = {
  tabs: TTabItems[]
  changeTab: (val: any) => void
  active?: any
  textOnly?: boolean
  iconOnly?: boolean
  inset?: boolean
  showActiveText?: boolean
}
export const Tabs: React.FC<TTabsProps> = (props: TTabsProps): ReactElement => {
  return <div className={classnames('tabs', { 'inset': props.inset })}>
    {props.tabs.length > 0 && props.tabs.map(tab => (
      <div
        key={tab.title}
        onClick={() => props.changeTab(tab.value)}
        className={classnames('tabs-item', {
          'active': props.active === tab.value,
          'rounded': props.showActiveText,
        })}
      >
        {props.iconOnly && !props.showActiveText
          ? <span className='icon'>{tab.icon}</span>
          : props.iconOnly && props.showActiveText
            ? <>
              {tab.icon && <span className='icon'>{tab.icon}</span>}
              {tab.value === props.active && <span className='title'>{tab.title}</span>}
            </>
            : props.textOnly ? <span className='title'>{tab.title}</span>
              :<>
                {tab.icon && <span className='icon'>{tab.icon}</span>}
                <span className='title'>{tab.title}</span>
              </>}
      </div>
    ))}
  </div>;

};

Tabs.defaultProps = {
  textOnly: false,
  iconOnly: false,
  inset: false,
  showActiveText: false,
};
