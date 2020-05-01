import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import { User } from 'firebase';

import { SnackbarContext } from './SnackbarContext';
import { Api } from '../utils/Api';

interface UserContext {
  user: User | null;
}

export const UserContext = createContext<UserContext>({
  user: null,
});

export const UserContextProvider: FC = ({ children }) => {
  const { showSnackbar } = useContext(SnackbarContext);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const signIn = async () => {
      try {
        const user = await Api.signIn();
        setUser(user);
      } catch (e) {
        showSnackbar(e);
      }
    };

    signIn();
  }, [showSnackbar]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
