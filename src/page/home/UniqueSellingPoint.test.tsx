import React from 'react';
import { render } from '@testing-library/react';

import { UniqueSellingPoint } from './UniqueSellingPoint';

describe('UniqueSellingPoint', () => {
  it('renders correctly', () => {
    const { container } = render(
      <UniqueSellingPoint
        svg="picture.svg"
        alt="Description of the picture."
        gridArea="first"
        headline="Banana"
        subtext="Bananas are not always crooked."
      />
    );

    expect(container).toMatchSnapshot();
  });
});
