import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { AlreadyParticipatedDialog } from './AlreadyParticipatedDialog';
import userEvent from '@testing-library/user-event';

describe('AlreadyParticipatedDialog.test', () => {
  let renderResult: RenderResult;
  const onClickMock = jest.fn();

  beforeEach(() => {
    renderResult = render(<AlreadyParticipatedDialog onClick={onClickMock} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders a headline', () => {
    const { getByText } = renderResult;
    const headline = getByText('Vielen für deine Teilnahme an der Umfrage!');

    expect(headline).toBeInTheDocument();
  });

  it('renders the button to show results', () => {
    const { getByText } = renderResult;
    const button = getByText('zum Ergebnis');

    expect(button).toBeInTheDocument();
  });

  it('calls callback after clicking on the button', () => {
    const { getByText } = renderResult;
    const button = getByText('zum Ergebnis');

    userEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });
});
