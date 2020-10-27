import React from 'react';
import { act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PollJoiningCallToAction } from './PollJoiningCallToAction';
import { messages } from './utils/messages';
import { Api } from '../../utils/Api';
import { renderWithProviders } from '../../utils/function/renderWithProviders';
import { keyboardEventMock } from '../../utils/keyboardEventMock';
import { PollType } from '../../types/enum/PollType';
import { Poll } from '../../types/interface/Poll';
import { App } from '../../App';

describe('PollJoiningCallToAction', () => {
  const ApiMock = Api as jest.Mocked<typeof Api>;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the correct headline', () => {
    const { getByText } = renderWithProviders(<PollJoiningCallToAction />);
    const headline = getByText('Trete einer Umfrage bei');

    expect(headline).toBeInTheDocument();
  });

  it('renders a submit button', () => {
    const { getByText } = renderWithProviders(<PollJoiningCallToAction />);
    const submitButton = getByText('beitreten');

    expect(submitButton).toBeInTheDocument();
  });

  it('shows error message if code is too short', () => {
    const { getByLabelText, getByText } = renderWithProviders(
      <PollJoiningCallToAction />
    );
    const codeInput = getByLabelText('5-stelliger Code');
    const submitButton = getByText('beitreten');

    userEvent.type(codeInput, '123');
    userEvent.click(submitButton);

    const errorMessage = getByText(messages.error.codeIsNotFiveDigits);
    expect(errorMessage).toBeInTheDocument();
    expect(codeInput).toBeInvalid();
  });

  it('hides error message when user is typing', () => {
    const { getByLabelText, getByText, queryByText } = renderWithProviders(
      <PollJoiningCallToAction />
    );
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
    ApiMock.findPollByInvitationCode.mockResolvedValue(null);
    const { getByText, getByLabelText } = renderWithProviders(
      <PollJoiningCallToAction />
    );
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
    const { getByText, getByLabelText } = renderWithProviders(
      <PollJoiningCallToAction />
    );
    const codeInput = getByLabelText('5-stelliger Code');
    const submitButton = getByText('beitreten');

    await act(async () => {
      await userEvent.type(codeInput, '12345');
      userEvent.click(submitButton);
    });

    expect(ApiMock.findPollByInvitationCode).toHaveBeenCalledWith(12345);
  });

  it('submits the code after pressing the enter key', async () => {
    const { getByLabelText } = renderWithProviders(<PollJoiningCallToAction />);
    const codeInput = getByLabelText('5-stelliger Code');

    await act(async () => {
      await userEvent.type(codeInput, '12345');
      fireEvent.keyPress(codeInput, keyboardEventMock.enter);
    });

    expect(ApiMock.findPollByInvitationCode).toHaveBeenCalledWith(12345);
  });

  it('opens the poll after joining successfully by invitation code', async () => {
    const poll: Poll = {
      id: '123',
      invitationCode: 11111,
      topic: 'Banana',
      description: 'One crooked banana.',
      choices: [{ id: '1', text: 'Apple' }],
      type: PollType.SINGLE_CHOICE,
      answers: [],
    };
    ApiMock.findPollByInvitationCode.mockResolvedValue(poll);
    const { getByText, getByLabelText } = renderWithProviders(<App />);
    const codeInput = getByLabelText('5-stelliger Code');

    await act(async () => {
      await userEvent.type(codeInput, '12345');
      fireEvent.keyPress(codeInput, keyboardEventMock.enter);
    });

    const topicHeadline = getByText('Banana');
    const description = getByText('One crooked banana.');
    const appleChoice = getByLabelText('Apple');
    const submitVoteButton = getByText('abstimmen');
    expect(topicHeadline).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(appleChoice).toBeInTheDocument();
    expect(submitVoteButton).toBeInTheDocument();
  });
});
