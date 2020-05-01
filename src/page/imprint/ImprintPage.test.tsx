import React from 'react';
import { render } from '@testing-library/react';

import { ImprintPage } from './ImprintPage';

describe('ImprintPage', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { container } = render(<ImprintPage />);

    expect(container).toMatchSnapshot();
  });

  it('scrolls to the top', () => {
    render(<ImprintPage />);

    expect(window.scrollTo).toHaveBeenCalledTimes(1);
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0 });
  });
});
