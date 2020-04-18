import React from 'react';
import { render } from '@testing-library/react';

import { UniqueSellingPoints } from './UniqueSellingPoints';
import { uspSubtexts } from './utils/uspSubtexts';

describe('UniqueSellingPoints', () => {
  it('renders the headlines', () => {
    const { getByText } = render(<UniqueSellingPoints />);
    const firstHeadline = getByText('Schnell');
    const secondHeadline = getByText('Kostenlos');
    const thirdHeadline = getByText('Unkompliziert');

    expect(firstHeadline).toBeInTheDocument();
    expect(secondHeadline).toBeInTheDocument();
    expect(thirdHeadline).toBeInTheDocument();
  });

  it('renders the subtexts', () => {
    const { getByText } = render(<UniqueSellingPoints />);
    const subtextFast = getByText(uspSubtexts.fast);
    const subtextFree = getByText(uspSubtexts.free);
    const subtextStraightForward = getByText(uspSubtexts.straightForward);

    expect(subtextFast).toBeInTheDocument();
    expect(subtextFree).toBeInTheDocument();
    expect(subtextStraightForward).toBeInTheDocument();
  });
});
