import React, { createContext, FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { routes } from '../utils/routes';
import { PollCreationSessionStorageItem } from '../types/enum/PollCreationSessionStorageItem';

interface PollCreationContext {
  initialTopic: string;
  openWithInitialTopic: (topic: string) => void;
}

export const PollCreationContext = createContext<PollCreationContext>({
  initialTopic: '',
  openWithInitialTopic: () => {},
});

export const PollCreationContextProvider: FC = ({ children }) => {
  const history = useHistory();

  const [initialTopic, setInitialTopic] = useState('');

  const openWithInitialTopic = (initialTopic: string) => {
    Object.values(PollCreationSessionStorageItem).forEach((item) => {
      sessionStorage.removeItem(item);
    });
    setInitialTopic(initialTopic);
    history.push(routes.creation);
  };

  return (
    <PollCreationContext.Provider
      value={{ initialTopic, openWithInitialTopic }}
    >
      {children}
    </PollCreationContext.Provider>
  );
};
