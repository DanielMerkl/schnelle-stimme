import { User } from 'firebase';

import { Poll } from '../../types/interface/Poll';
import { Api as RealApi } from '../Api';

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

export const Api: typeof RealApi = {
  signIn,
  createPoll,
};
