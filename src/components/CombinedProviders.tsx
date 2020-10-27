import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, ThemeProvider } from '@material-ui/core';

import { theme } from '../utils/theme';
import { PollCreationContextProvider } from '../context/PollCreationContext';
import { UserContextProvider } from '../context/UserContext';
import { SnackbarContextProvider } from '../context/SnackbarContext';
import { PollContextProvider } from '../context/PollContext';
import { ResultContextProvider } from '../context/ResultContext';

export const CombinedProviders: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <SnackbarContextProvider>
            <UserContextProvider>
              <PollContextProvider>
                <PollCreationContextProvider>
                  <ResultContextProvider>{children}</ResultContextProvider>
                </PollCreationContextProvider>
              </PollContextProvider>
            </UserContextProvider>
          </SnackbarContextProvider>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
};
