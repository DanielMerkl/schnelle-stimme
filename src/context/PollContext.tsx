import React, { createContext, FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Poll } from '../types/interface/Poll';
import { routes } from '../utils/routes';

interface PollContext {
  poll: Poll | null;
  openPoll: (poll: Poll) => void;
}

export const PollContext = createContext<PollContext>({
  poll: null,
  openPoll: () => {},
});

export const PollContextProvider: FC = ({ children }) => {
  const history = useHistory();

  const [poll, setPoll] = useState<Poll | null>(null);

  const openPoll = (poll: Poll) => {
    setPoll(poll);
    history.push(routes.poll);
  };

  return (
    <PollContext.Provider value={{ poll, openPoll }}>
      {children}
    </PollContext.Provider>
  );
};
