import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';

import { Poll } from '../types/interface/Poll';
import { routes } from '../utils/routes';

interface Context {
  poll: Poll | null;
  openPoll: (poll: Poll) => void;
  setPoll: Dispatch<SetStateAction<Poll | null>>;
}

export const PollContext = createContext<Context>({
  poll: null,
  openPoll: () => {},
  setPoll: () => {},
});

export const PollContextProvider: FC = ({ children }) => {
  const history = useHistory();

  const [poll, setPoll] = useState<Poll | null>(null);

  const openPoll = (poll: Poll) => {
    setPoll(poll);
    history.push(routes.poll);
  };

  return (
    <PollContext.Provider value={{ poll, openPoll, setPoll }}>
      {children}
    </PollContext.Provider>
  );
};
