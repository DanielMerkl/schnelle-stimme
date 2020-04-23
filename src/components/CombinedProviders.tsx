import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, ThemeProvider } from '@material-ui/core';

import { theme } from '../utils/theme';
import { PollCreationContextProvider } from '../context/PollCreationContext';
import { UserContextProvider } from '../context/UserContext';

export const CombinedProviders: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <UserContextProvider>
            <PollCreationContextProvider>
              {children}
            </PollCreationContextProvider>
          </UserContextProvider>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
};
