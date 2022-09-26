import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import StatButton from './StatButton';
import {TStats} from '../../types';

describe('StatButton', () => {
  test('render stat button', () => {
    const { getByRole } = render(<StatButton type={TStats.SCORE} />);
    const button = getByRole('button');
    expect(button).toBeTruthy();
  });
  test('render add score button', () => {
    const { getByRole } = render(<StatButton type={TStats.SCORE} />);
    const button = getByRole('button');
    expect(button).toHaveTextContent('add score');
  });
  test('render track stats button', () => {
    const { getByRole } = render(<StatButton type={TStats.ASSISTS} />);
    const button = getByRole('button');
    expect(button).toHaveTextContent('track stats');
  });
  test('render track stats button', () => {
    const { getByRole } = render(<StatButton type={TStats.POTM} />);
    const button = getByRole('button');
    expect(button).toHaveTextContent('vote 4 potm');
  });
});
