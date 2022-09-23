import React from 'react';
import { render } from '@testing-library/react';

import Tabs from './Tabs';
const tabs = [
  {
    title: 'Standing',
    icon: '',
    value: 1,
  },
  {
    title: 'Feed',
    icon: '',
    value: 2,
  },
  {
    title: 'Result',
    icon: '',
    value: 3,
  },
  {
    title: 'Leaderboard',
    icon: '',
    value: 4,
  },
];

const changeTab = () => {

}

describe('Tabs', () => {
  test('render tabs component', () => {
    render(<Tabs tabs={tabs} changeTab={changeTab} />)
  });
});
