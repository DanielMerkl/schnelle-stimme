import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { CombinedProviders } from './components/CombinedProviders';
import { renderWithProviders } from './utils/function/renderWithProviders';

describe('App', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

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

  it('scrolls to the top on pathname change', async () => {
    renderWithProviders(<App />);

    expect(window.scrollTo).toHaveBeenCalledTimes(1);
    expect(window.scrollTo).toHaveBeenLastCalledWith({ top: 0 });
  });
});
