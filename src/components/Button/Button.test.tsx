import React from 'react';
import { render } from '@testing-library/react';
import Button from "./Button";

describe('Tabs', () => {
  test('render tabs component', () => {
    render(<Button label={'Button'}  />)
  });
});
