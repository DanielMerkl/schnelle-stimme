import React from 'react';
import { render } from '@testing-library/react';

import { InvitationCode } from './InvitationCode';

describe('InvitationCode', () => {
  it('renders correctly', () => {
    const { container } = render(<InvitationCode code={12345} />);

    expect(container).toMatchSnapshot();
  });
});
