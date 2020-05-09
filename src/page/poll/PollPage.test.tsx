import React from 'react';
import { User } from 'firebase';
import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Api } from '../../utils/Api';
import { renderWithProviders } from '../../utils/function/renderWithProviders';
import { PollPage } from './PollPage';
import { routes } from '../../utils/routes';
import { defaultPoll } from '../../utils/defaultObject/defaultPoll';
import { PollType } from '../../types/enum/PollType';
import { Poll } from '../../types/interface/Poll';
import { Answer } from '../../types/interface/Answer';

describe('PollPage', () => {
  const ApiMock = Api as jest.Mocked<typeof Api>;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('redirects to home page if poll is null', () => {
    const { history } = renderWithProviders(<PollPage />, {
      mockPollContext: true,
      poll: null,
      mockRouter: true,
      initialRoute: routes.poll,
    });

    expect(history.location.pathname).toEqual(routes.home);
  });

  it('renders AlreadyParticipatedDialog when user already submitted vote', () => {
    const { getByText } = renderWithProviders(<PollPage />, {
      mockPollContext: true,
      poll: {
        ...defaultPoll,
        answers: [{ userId: '123', content: 1 }],
      },
      mockUserContext: true,
      user: {
        uid: '123',
      } as User,
    });

    const headline = getByText(
      'Vielen Dank für deine Teilnahme an der Umfrage!'
    );
    const button = getByText('zum Ergebnis');

    expect(headline).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('renders the poll otherwise', () => {
    const { getByText } = renderWithProviders(<PollPage />, {
      mockPollContext: true,
      poll: {
        id: '123',
        invitationCode: 123,
        topic: 'Das Thema lautet: Banane',
        description: 'Eine tolle Beschreibung',
        choices: [
          { id: '1', text: 'Banana' },
          { id: '2', text: 'Apple' },
          { id: '3', text: 'Cherry' },
        ],
        type: PollType.SINGLE_CHOICE,
        isNameMandatory: false,
        isResultSecret: false,
        answers: [],
      },
    });

    const topic = getByText('Das Thema lautet: Banane');
    const description = getByText('Eine tolle Beschreibung');
    const choice1 = getByText('Banana');
    const choice2 = getByText('Apple');
    const choice3 = getByText('Cherry');
    const submitVoteButton = getByText('abstimmen');

    expect(topic).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(choice1).toBeInTheDocument();
    expect(choice2).toBeInTheDocument();
    expect(choice3).toBeInTheDocument();
    expect(submitVoteButton).toBeInTheDocument();
  });

  it('disables submit button when answer is invalid', () => {
    const { getByText, getByLabelText } = renderWithProviders(<PollPage />, {
      mockPollContext: true,
      poll: {
        id: '123',
        invitationCode: 123,
        topic: 'Das Thema lautet: Banane',
        description: 'Eine tolle Beschreibung',
        choices: [
          { id: '1', text: 'Banana' },
          { id: '2', text: 'Apple' },
          { id: '3', text: 'Cherry' },
        ],
        type: PollType.MULTIPLE_CHOICE,
        isNameMandatory: false,
        isResultSecret: false,
        answers: [],
      },
    });
    const bananaChoice = getByLabelText('Banana');
    const submitVoteButton = getByText('abstimmen').parentElement;

    // answer is initially null and should therefore be invalid
    expect(submitVoteButton).toBeDisabled();

    userEvent.click(bananaChoice);

    // answer is now a valid multiple-choice answer ([0])
    expect(submitVoteButton).toBeEnabled();

    userEvent.click(bananaChoice);

    // answer is now empty array ([]) and therefore an invalid multiple-choice answer
    expect(submitVoteButton).toBeDisabled();
  });

  it('handles submit vote button click correctly', async () => {
    const setPollMock = jest.fn();
    const openResultPageMock = jest.fn();
    const initialPoll: Poll = {
      id: '111',
      invitationCode: 22222,
      topic: 'Das Thema lautet: Banane',
      description: 'Eine tolle Beschreibung',
      choices: [
        { id: '1', text: 'Banana' },
        { id: '2', text: 'Apple' },
        { id: '3', text: 'Cherry' },
      ],
      type: PollType.MULTIPLE_CHOICE,
      isNameMandatory: false,
      isResultSecret: false,
      answers: [],
    };
    const { getByText, getByLabelText } = renderWithProviders(<PollPage />, {
      mockPollContext: true,
      poll: initialPoll,
      setPoll: setPollMock,
      mockUserContext: true,
      user: { uid: '222' } as User,
      mockResultContext: true,
      openResultPage: openResultPageMock,
    });
    const bananaChoice = getByLabelText('Banana');
    const submitVoteButton = getByText('abstimmen').parentElement;

    await act(async () => {
      await userEvent.click(bananaChoice);
      await userEvent.click(submitVoteButton!);
    });

    const expectedAnswer: Answer = {
      userId: '222',
      content: [0], // banana was selected which had an index of 0
    };
    expect(ApiMock.submitAnswer).toHaveBeenCalledWith('111', expectedAnswer);
    expect(setPollMock).toHaveBeenCalledWith({
      ...initialPoll,
      answers: [expectedAnswer],
    });
    expect(openResultPageMock).toHaveBeenCalledWith(initialPoll.id);
  });
});
