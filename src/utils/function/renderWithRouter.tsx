import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { render, RenderResult } from '@testing-library/react';
import { StylesProvider, ThemeProvider } from '@material-ui/core';

import { theme } from '../theme';
import { PollCreationContextProvider } from '../../context/PollCreationContext';

interface RenderWithRouterResult extends RenderResult {
  history: MemoryHistory;
}

interface Options {
  initialRoute?: string;
}

/**
 * Helper function that additionally returns the history object in order to test
 * routing-functionality inside of components.
 * @param reactElement
 * @param options
 */
export const renderWithRouter = (
  reactElement: React.ReactElement,
  options?: Options
): RenderWithRouterResult => {
  let initialEntries = undefined;
  if (options?.initialRoute !== undefined) {
    initialEntries = [options.initialRoute];
  }
  const history = createMemoryHistory({ initialEntries: initialEntries });

  const renderResult = render(
    <Router history={history}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <PollCreationContextProvider>
            {reactElement}
          </PollCreationContextProvider>
        </ThemeProvider>
      </StylesProvider>
    </Router>
  );

  return {
    ...renderResult,
    history: history,
  };
};
