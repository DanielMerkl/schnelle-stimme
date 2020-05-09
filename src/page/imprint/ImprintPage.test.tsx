import React from 'react';
import { render } from '@testing-library/react';

import { ImprintPage } from './ImprintPage';

describe('ImprintPage', () => {
  it('renders correctly', () => {
    const { container } = render(<ImprintPage />);

    expect(container).toMatchSnapshot();
  });
});
