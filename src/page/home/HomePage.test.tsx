import React from 'react';
import { render } from '@testing-library/react';

import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('renders the headline', () => {
    const { getByText } = render(<HomePage />);
    const headline = getByText('3.. 2.. 1.. Abgestimmt!');

    expect(headline).toBeInTheDocument();
  });

  it('renders the subtext', () => {
    const { getByText } = render(<HomePage />);
    const subtext = getByText('Der schnellste Weg, eine Umfrage zu machen.');

    expect(subtext).toBeInTheDocument();
  });
});
