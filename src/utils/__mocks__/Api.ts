import { User } from 'firebase';

import { Poll } from '../../types/interface/Poll';
import { Api as RealApi } from '../Api';
import { PollType } from '../../types/enum/PollType';

const signIn = jest.fn(
  async (): Promise<User | null> => {
    return Promise.resolve(null);
  }
);

const createPoll = jest.fn(
  async (poll: Poll): Promise<Poll> => {
    return Promise.resolve(poll);
  }
);

const findPollByInvitationCode = jest.fn(
  async (): Promise<Poll | null> => {
    return Promise.resolve({
      id: '123',
      invitationCode: 11111,
      topic: 'Banana',
      description: 'One crooked banana.',
      choices: [],
      type: PollType.SINGLE_CHOICE,
      isNameMandatory: false,
      isResultSecret: false,
      answers: [],
    });
  }
);

const submitAnswer = jest.fn(
  async (): Promise<void> => {
    return Promise.resolve();
  }
);

export const Api: typeof RealApi = {
  signIn,
  createPoll,
  findPollByInvitationCode,
  submitAnswer,
};
