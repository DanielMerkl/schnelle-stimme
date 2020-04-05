import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { routes } from './utils/routes';
import HomePage from './page/home/HomePage';
import PollPage from './page/poll/PollPage';
import CreatePollPage from './page/createPoll/CreatePollPage';
import JoinPollPage from './page/joinPoll/JoinPollPage';
import ResultPage from './page/result/ResultPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.home} exact>
          <HomePage />
        </Route>
        <Route path={routes.poll}>
          <PollPage />
        </Route>
        <Route path={routes.createPoll}>
          <CreatePollPage />
        </Route>
        <Route path={routes.joinPoll}>
          <JoinPollPage />
        </Route>
        <Route path={routes.result}>
          <ResultPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
