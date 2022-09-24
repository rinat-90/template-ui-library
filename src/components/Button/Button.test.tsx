import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
  test('render button component', async () => {
    const { getByRole } = render(<Button label={'Button'}  />);
    const button = getByRole('button');
    expect(button).toHaveTextContent('Button');
  });
  test('render primary button', async () => {
    const { getByRole } = render(<Button label={'Button'} primary={true} />);
    const button = getByRole('button');
    expect(button).toHaveClass('button-primary');
  });
  test('render small button', async () => {
    const { getByRole } = render(<Button label={'Button'} size={'small'} />);
    const button = getByRole('button');
    expect(button).toHaveClass('button-small');
  });
  test('render large button', async () => {
    const { getByRole } = render(<Button label={'Button'} size={'large'} />);
    const button = getByRole('button');
    expect(button).toHaveClass('button-large');
  });
  test('render rounded button', async () => {
    const { getByRole } = render(<Button label={'Button'} rounded />);
    const button = getByRole('button');
    expect(button).toHaveClass('button-rounded');
  });
  test('render outlined button', async () => {
    const { getByRole } = render(<Button label={'Button'} outlined />);
    const button = getByRole('button');
    expect(button).toHaveClass('button-outlined');
  });
  test('render inset button', async () => {
    const { getByRole } = render(<Button label={'Button'} inset />);
    const button = getByRole('button');
    expect(button).toHaveClass('button-inset');
  });
});
