import React, { createContext, FC, useEffect, useState } from 'react';
import { User } from 'firebase';

import { Firebase } from '../utils/Firebase';

interface UserContext {
  user: User | null;
}

export const UserContext = createContext<UserContext>({
  user: null,
});

export const UserContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const signIn = async () => {
      try {
        const { user } = await Firebase.auth().signInAnonymously();
        setUser(user);
        console.log('user: ', user?.uid);
      } catch (e) {
        console.error(e);
      }
    };

    signIn();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
