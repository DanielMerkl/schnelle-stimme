import React from 'react';
import { render } from '@testing-library/react';
import { PollJoiningCallToAction } from './PollJoiningCallToAction';

describe('PollJoiningCallToAction', () => {
  it('renders the correct headline', () => {
    const { getByText } = render(<PollJoiningCallToAction />);
    const headline = getByText('Trete einer Umfrage bei');

    expect(headline).toBeInTheDocument();
  });

  xit('shows error message if code is too short', () => {
    // TODO: implement when joining workflow is implemented
  });

  xit('shows error message if poll was not found', () => {
    // TODO: implement when joining workflow is implemented
  });

  xit('submits the code after clicking on the submit button', () => {
    // TODO: implement when joining workflow is implemented
  });

  xit('submits the code after pressing the enter key', () => {
    // TODO: implement when joining workflow is implemented
  });
});
