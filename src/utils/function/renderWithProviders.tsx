import React, { Dispatch, FC, SetStateAction } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { StylesProvider, ThemeProvider } from '@material-ui/core';
import { User } from 'firebase';

import { PollContext, PollContextProvider } from '../../context/PollContext';
import { UserContext, UserContextProvider } from '../../context/UserContext';
import {
  SnackbarContext,
  SnackbarContextProvider,
} from '../../context/SnackbarContext';
import {
  ResultContext,
  ResultContextProvider,
} from '../../context/ResultContext';
import { theme } from '../theme';
import { Poll } from '../../types/interface/Poll';
import {
  PollCreationContext,
  PollCreationContextProvider,
} from '../../context/PollCreationContext';

interface ShouldMock {
  mockRouter?: boolean;
  mockSnackbarContext?: boolean;
  mockUserContext?: boolean;
  mockPollContext?: boolean;
  mockPollCreationContext?: boolean;
  mockResultContext?: boolean;
}

interface Options extends ShouldMock {
  initialRoute?: string;
  showSnackbar?: (message: string) => void;
  user?: User | null;
  poll?: Poll | null;
  openPoll?: (poll: Poll) => void;
  setPoll?: Dispatch<SetStateAction<Poll | null>>;
  initialTopic?: string;
  openWithInitialTopic?: (topic: string) => void;
  result?: Poll | null;
  openResultPage?: (pollId: string) => void;
}

export interface RenderWithProvidersResult extends RenderResult {
  history: MemoryHistory;
}

/**
 * Helper function that allows to mock every context provider in the application
 * and additionally returns the history object in order to test routing
 * functionality.
 * @param reactElement
 * @param options
 */
export const renderWithProviders = (
  reactElement: React.ReactElement,
  options?: Options
): RenderWithProvidersResult => {
  let initialEntries = undefined;
  if (options?.initialRoute !== undefined) {
    initialEntries = [options.initialRoute];
  }
  const history = createMemoryHistory({ initialEntries: initialEntries });

  const renderResult = render(
    <RouterMock options={options} history={history}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <SnackbarContextMock options={options}>
            <UserContextMock options={options}>
              <PollContextMock options={options}>
                <PollCreationContextMock options={options}>
                  <ResultContextMock options={options}>
                    {reactElement}
                  </ResultContextMock>
                </PollCreationContextMock>
              </PollContextMock>
            </UserContextMock>
          </SnackbarContextMock>
        </ThemeProvider>
      </StylesProvider>
    </RouterMock>
  );

  return {
    ...renderResult,
    history,
  };
};

interface ComponentMock {
  options?: Options;
}

interface RouterMockProps extends ComponentMock {
  history: MemoryHistory;
}

const RouterMock: FC<RouterMockProps> = ({ options, history, children }) => {
  if (options?.mockRouter) {
    return <Router history={history}>{children}</Router>;
  } else {
    return <BrowserRouter>{children}</BrowserRouter>;
  }
};

const SnackbarContextMock: FC<ComponentMock> = ({ options, children }) => {
  if (options?.mockSnackbarContext && options.showSnackbar) {
    return (
      <SnackbarContext.Provider value={{ showSnackbar: options.showSnackbar }}>
        {children}
      </SnackbarContext.Provider>
    );
  } else {
    return <SnackbarContextProvider>{children}</SnackbarContextProvider>;
  }
};

const UserContextMock: FC<ComponentMock> = ({ options, children }) => {
  if (options?.mockUserContext && options.user) {
    return (
      <UserContext.Provider value={{ user: options.user }}>
        {children}
      </UserContext.Provider>
    );
  } else {
    return <UserContextProvider>{children}</UserContextProvider>;
  }
};

const PollContextMock: FC<ComponentMock> = ({ options, children }) => {
  if (
    options?.mockPollContext &&
    options.poll &&
    options.setPoll &&
    options.openPoll
  ) {
    return (
      <PollContext.Provider
        value={{
          poll: options.poll,
          setPoll: options.setPoll,
          openPoll: options.openPoll,
        }}
      >
        {children}
      </PollContext.Provider>
    );
  } else {
    return <PollContextProvider>{children}</PollContextProvider>;
  }
};

const PollCreationContextMock: FC<ComponentMock> = ({ options, children }) => {
  if (
    options?.mockPollCreationContext &&
    options.initialTopic &&
    options.openWithInitialTopic
  ) {
    return (
      <PollCreationContext.Provider
        value={{
          initialTopic: options.initialTopic,
          openWithInitialTopic: options.openWithInitialTopic,
        }}
      >
        {children}
      </PollCreationContext.Provider>
    );
  } else {
    return (
      <PollCreationContextProvider>{children}</PollCreationContextProvider>
    );
  }
};

const ResultContextMock: FC<ComponentMock> = ({ options, children }) => {
  if (options?.mockResultContext && options.result && options.openResultPage) {
    return (
      <ResultContext.Provider
        value={{
          result: options.result,
          openResultPage: options.openResultPage,
        }}
      >
        {children}
      </ResultContext.Provider>
    );
  } else {
    return <ResultContextProvider>{children}</ResultContextProvider>;
  }
};
