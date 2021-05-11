import React, { createContext, FC, useCallback, useState } from 'react';

import { Snackbar } from '../components/Snackbar';

interface Context {
  showSnackbar: (message: string) => void;
}

export const SnackbarContext = createContext<Context>({
  showSnackbar: () => {},
});

export const SnackbarContextProvider: FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const showSnackbar = useCallback((message: string) => {
    setMessage(message);
    setOpen(true);
  }, []);

  const memoizedContextValue: Context = React.useMemo(
    () => ({ showSnackbar }),
    [showSnackbar]
  );

  return (
    <SnackbarContext.Provider value={memoizedContextValue}>
      {children}
      <Snackbar open={open} message={message} onClose={handleClose} />
    </SnackbarContext.Provider>
  );
};
