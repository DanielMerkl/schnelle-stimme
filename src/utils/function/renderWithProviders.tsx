import React from 'react';
import { render } from '@testing-library/react';

import { CombinedProviders } from '../../components/CombinedProviders';

export const renderWithProviders = (reactElement: React.ReactElement) => {
  return render(<CombinedProviders>{reactElement}</CombinedProviders>);
};
