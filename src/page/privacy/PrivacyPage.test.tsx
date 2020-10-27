import React from 'react';
import { render } from '@testing-library/react';

import { PrivacyPage } from './PrivacyPage';

describe('PrivacyPage', () => {
  it('renders correctly', () => {
    const { container } = render(<PrivacyPage />);

    expect(container).toMatchSnapshot();
  });
});
