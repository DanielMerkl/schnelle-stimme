import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PollJoiningCallToAction } from './PollJoiningCallToAction';
import { messages } from './utils/messages';

describe('PollJoiningCallToAction', () => {
  it('renders the correct headline', () => {
    const { getByText } = render(<PollJoiningCallToAction />);
    const headline = getByText('Trete einer Umfrage bei');

    expect(headline).toBeInTheDocument();
  });

  it('renders a submit button', () => {
    const { getByText } = render(<PollJoiningCallToAction />);
    const submitButton = getByText('beitreten');

    expect(submitButton).toBeInTheDocument();
  });

  it('shows error message if code is too short', () => {
    const { getByLabelText, getByText } = render(<PollJoiningCallToAction />);
    const codeInput = getByLabelText('5-stelliger Code');
    const submitButton = getByText('beitreten');

    userEvent.type(codeInput, '123');
    fireEvent.click(submitButton);

    const errorMessage = getByText(messages.error.codeIsNotFiveDigits);
    expect(errorMessage).toBeInTheDocument();
  });

  it('hides error message when user is typing', () => {
    const { getByLabelText, getByText, queryByText } = render(
      <PollJoiningCallToAction />
    );
    const codeInput = getByLabelText('5-stelliger Code');
    const submitButton = getByText('beitreten');

    fireEvent.click(submitButton);
    let errorMessage = getByText(messages.error.codeIsNotFiveDigits);
    expect(errorMessage).toBeInTheDocument();

    userEvent.type(codeInput, '1');

    const element = queryByText(messages.error.codeIsNotFiveDigits);
    expect(element).not.toBeInTheDocument();
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
