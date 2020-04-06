import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { CombinedProviders } from './components/CombinedProviders';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <CombinedProviders>
        <App />
      </CombinedProviders>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
