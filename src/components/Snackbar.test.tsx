import React from 'react';
import { render } from '@testing-library/react';
import { Snackbar } from './Snackbar';

describe('Snackbar', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Snackbar open={true} message={'This is a banana.'} onClose={jest.fn()} />
    );

    expect(container).toMatchSnapshot();
  });
});
