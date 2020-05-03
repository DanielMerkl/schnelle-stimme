import React, { createContext, FC, useEffect, useState } from 'react';

import { Poll } from '../types/interface/Poll';
import { Firebase } from '../utils/Firebase';
import { Collection } from '../types/enum/Collection';
import { useHistory } from 'react-router-dom';
import { routes } from '../utils/routes';

interface ResultContext {
  result: Poll | null;
  openResultPage: (pollId: string) => void;
}

export const ResultContext = createContext<ResultContext>({
  result: null,
  openResultPage: () => {},
});

export const ResultContextProvider: FC = ({ children }) => {
  const history = useHistory();

  const [result, setResult] = useState<Poll | null>(null);
  const [pollId, setPollId] = useState<string | null>(null);

  useEffect(() => {
    if (pollId !== null) {
      const unsubscribe = Firebase.firestore()
        .collection(Collection.polls)
        .doc(pollId)
        .onSnapshot((snapshot) => {
          if (snapshot.exists) {
            setResult(snapshot.data() as Poll);
          } else {
            setResult(null);
          }
        });

      return () => {
        unsubscribe();
      };
    }
  }, [pollId]);

  const openResultPage = (pollId: string) => {
    setPollId(pollId);
    history.push(routes.result);
  };

  return (
    <ResultContext.Provider value={{ result, openResultPage }}>
      {children}
    </ResultContext.Provider>
  );
};
