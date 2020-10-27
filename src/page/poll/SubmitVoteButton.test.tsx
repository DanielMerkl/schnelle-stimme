import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SubmitVoteButton } from './SubmitVoteButton';

describe('SubmitVoteButton', () => {
  it('renders correct button text', () => {
    const { getByText } = render(
      <SubmitVoteButton disabled={false} isLoading={false} onClick={() => {}} />
    );
    const button = getByText('abstimmen').parentElement;

    expect(button).toBeInTheDocument();
  });

  it('disables button', () => {
    const { getByText } = render(
      <SubmitVoteButton disabled={true} isLoading={false} onClick={() => {}} />
    );
    const button = getByText('abstimmen').parentElement;

    expect(button).toBeDisabled();
  });

  it('renders circular progress when loading', () => {
    const { getByRole } = render(
      <SubmitVoteButton disabled={true} isLoading={true} onClick={() => {}} />
    );
    const loadingSpinner = getByRole('progressbar');

    expect(loadingSpinner).toBeInTheDocument();
  });

  it('calls onClick callback', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <SubmitVoteButton
        disabled={false}
        isLoading={false}
        onClick={onClickMock}
      />
    );
    const button = getByText('abstimmen').parentElement;

    userEvent.click(button!);

    expect(onClickMock).toHaveBeenCalled();
  });
});
