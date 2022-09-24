import './Tabs.scss';
import React, { ReactElement } from 'react';
import classnames from 'classnames';
import {TTabItems} from '../../types';

interface TTabsProps {
  tabs: TTabItems[]
  changeTab: (val?: string | number) => void
  active?: boolean
  textOnly?: boolean
  iconOnly?: boolean
  inset?: boolean
  showActiveText?: boolean
}
const Tabs: React.FC<TTabsProps> = ({
  tabs,
  changeTab,
  active,
  textOnly,
  iconOnly,
  inset,
  showActiveText,
}): ReactElement => {
  return <div className={classnames('tabs', { 'inset': inset })}>
    {tabs.length > 0 && tabs.map(tab => (
      <div
        key={tab.title}
        onClick={() => changeTab(tab.value)}
        className={classnames('tabs-item', {
          'active': active,
          'rounded': showActiveText,
        })}
      >
        {iconOnly && !showActiveText
          ? <span className='icon'>{tab.icon}</span>
          : iconOnly && showActiveText
            ? <>
              {tab.icon && <span className='icon'>{tab.icon}</span>}
              {active && <span className='title'>{tab.title}</span>}
            </>
            : textOnly ? <span className='title'>{tab.title}</span>
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

export default Tabs;
