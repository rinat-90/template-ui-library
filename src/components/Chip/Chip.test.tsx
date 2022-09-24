import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Chip from './Chip';

describe('Chip', () => {
  test('render Chip component', async () => {
    const { getByText } = render(<Chip label={'Chip'}  />);
    const chip = getByText('Chip');
    expect(chip).toHaveTextContent('Chip');
  });
});
