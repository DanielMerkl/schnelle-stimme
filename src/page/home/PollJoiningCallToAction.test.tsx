import React from 'react';
import { RenderResult, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PollJoiningCallToAction } from './PollJoiningCallToAction';
import { messages } from './utils/messages';
import { Api } from '../../utils/Api';
import { renderWithProviders } from '../../utils/function/renderWithProviders';
import { keyboardEventMock } from '../../utils/keyboardEventMock';

describe('PollJoiningCallToAction', () => {
  let renderResult: RenderResult;
  const ApiMock = Api as jest.Mocked<typeof Api>;

  beforeEach(() => {
    renderResult = renderWithProviders(<PollJoiningCallToAction />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the correct headline', () => {
    const { getByText } = renderResult;
    const headline = getByText('Trete einer Umfrage bei');

    expect(headline).toBeInTheDocument();
  });

  it('renders a submit button', () => {
    const { getByText } = renderResult;
    const submitButton = getByText('beitreten');

    expect(submitButton).toBeInTheDocument();
  });

  it('shows error message if code is too short', () => {
    const { getByLabelText, getByText } = renderResult;
    const codeInput = getByLabelText('5-stelliger Code');
    const submitButton = getByText('beitreten');

    userEvent.type(codeInput, '123');
    userEvent.click(submitButton);

    const errorMessage = getByText(messages.error.codeIsNotFiveDigits);
    expect(errorMessage).toBeInTheDocument();
    expect(codeInput).toBeInvalid();
  });

  it('hides error message when user is typing', () => {
    const { getByLabelText, getByText, queryByText } = renderResult;
    const codeInput = getByLabelText('5-stelliger Code');
    const submitButton = getByText('beitreten');

    userEvent.click(submitButton);

    const errorMessage = getByText(messages.error.codeIsNotFiveDigits);
    expect(errorMessage).toBeInTheDocument();
    expect(codeInput).toBeInvalid();

    userEvent.type(codeInput, '1');

    const element = queryByText(messages.error.codeIsNotFiveDigits);
    expect(element).not.toBeInTheDocument();
    expect(codeInput).toBeValid();
  });

  it('shows error message if poll was not found', async () => {
    ApiMock.findPollByInvitationCode.mockImplementationOnce(() => {
      return Promise.resolve(null);
    });
    const { getByText, getByLabelText } = renderResult;
    const codeInput = getByLabelText('5-stelliger Code');
    const submitButton = getByText('beitreten');

    await act(async () => {
      await userEvent.type(codeInput, '12345');
      userEvent.click(submitButton);
    });

    const errorMessage = getByText(messages.error.noPollFound);
    expect(errorMessage).toBeInTheDocument();
    expect(codeInput).toBeInvalid();
  });

  it('submits the code after clicking on the submit button', async () => {
    const { getByText, getByLabelText } = renderResult;
    const codeInput = getByLabelText('5-stelliger Code');
    const submitButton = getByText('beitreten');

    await act(async () => {
      await userEvent.type(codeInput, '12345');
      userEvent.click(submitButton);
    });

    expect(ApiMock.findPollByInvitationCode).toHaveBeenCalledWith(12345);
  });

  it('submits the code after pressing the enter key', async () => {
    const { getByLabelText } = renderResult;
    const codeInput = getByLabelText('5-stelliger Code');

    await act(async () => {
      await userEvent.type(codeInput, '12345');
      fireEvent.keyPress(codeInput, keyboardEventMock.enter);
    });

    expect(ApiMock.findPollByInvitationCode).toHaveBeenCalledWith(12345);
  });

  xit('opens the poll after joining successfully by invitation code', () => {
    // TODO: continue after implementing poll page
  });
});
