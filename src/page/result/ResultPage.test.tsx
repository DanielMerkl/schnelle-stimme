import React from 'react';

import { renderWithProviders } from '../../utils/function/renderWithProviders';
import { ResultPage } from './ResultPage';
import { routes } from '../../utils/routes';
import { Poll } from '../../types/interface/Poll';
import { PollType } from '../../types/enum/PollType';

describe('ResultPage', () => {
  const result: Poll = {
    id: '123',
    type: PollType.SINGLE_CHOICE,
    topic: 'Banana',
    answers: [
      { userId: 'a', content: '1' },
      { userId: 'b', content: '1' },
      { userId: 'c', content: '1' },
      { userId: 'd', content: '2' },
    ],
    choices: [
      { id: '1', text: 'Apple' },
      { id: '2', text: 'Cherry' },
      { id: '3', text: 'Mango' },
    ],
    description: 'A crooked banana.',
    invitationCode: 12345,
  };

  it('redirects when the result is null', () => {
    const { history } = renderWithProviders(<ResultPage />, {
      mockResultContext: true,
      result: null,
      mockRouter: true,
      initialRoute: routes.result,
    });

    expect(history.location.pathname).toEqual(routes.home);
  });

  it('renders the topic', () => {
    const { getByText } = renderWithProviders(<ResultPage />, {
      mockResultContext: true,
      result: result,
    });
    const topicHeadline = getByText('Banana');

    expect(topicHeadline).toBeInTheDocument();
  });

  it('renders the description', () => {
    const { getByText } = renderWithProviders(<ResultPage />, {
      mockResultContext: true,
      result: result,
    });
    const description = getByText('A crooked banana.');

    expect(description).toBeInTheDocument();
  });

  it('renders all choices', () => {
    const { getByText } = renderWithProviders(<ResultPage />, {
      mockResultContext: true,
      result: result,
    });
    const appleChoice = getByText('Apple');
    const cherryChoice = getByText('Cherry');
    const mangoChoice = getByText('Mango');

    expect(appleChoice).toBeInTheDocument();
    expect(cherryChoice).toBeInTheDocument();
    expect(mangoChoice).toBeInTheDocument();
  });

  it('renders the number of participants', () => {
    const { getByText } = renderWithProviders(<ResultPage />, {
      mockResultContext: true,
      result: result,
    });
    const numberOfParticipants = getByText('Anzahl der Teilnehmer: 4');

    expect(numberOfParticipants).toBeInTheDocument();
  });

  it('renders the number and percentages of votes', () => {
    const { getByText } = renderWithProviders(<ResultPage />, {
      mockResultContext: true,
      result: result,
    });
    const appleAmount = getByText('(3)');
    const applePercentage = getByText('75,00 %');
    const cherryAmount = getByText('(1)');
    const cherryPercentage = getByText('25,00 %');

    expect(appleAmount).toBeInTheDocument();
    expect(applePercentage).toBeInTheDocument();
    expect(cherryAmount).toBeInTheDocument();
    expect(cherryPercentage).toBeInTheDocument();
  });

  it('renders the invitation code', () => {
    const { getByText } = renderWithProviders(<ResultPage />, {
      mockResultContext: true,
      result: result,
    });
    const invitationCode = getByText('Code: 12345');

    expect(invitationCode).toBeInTheDocument();
  });
});
