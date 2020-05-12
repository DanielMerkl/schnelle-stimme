import React from 'react';
import userEvent from '@testing-library/user-event';

import { Header } from './Header';
import { renderWithProviders } from '../utils/function/renderWithProviders';
import { routes } from '../utils/routes';

describe('Header', () => {
  it('renders a title', () => {
    const { getByText } = renderWithProviders(<Header />);
    const title = getByText('Schnelle Stimme', { exact: false });

    expect(title).toBeInTheDocument();
  });

  it('renders a home button', () => {
    const { getByLabelText } = renderWithProviders(<Header />);
    const homeButton = getByLabelText('Zur Startseite');

    expect(homeButton).toBeInTheDocument();
  });

  it('navigates to home after clicking on the home button', () => {
    const { getByLabelText, history } = renderWithProviders(<Header />, {
      mockRouter: true,
      initialRoute: routes.imprint,
    });
    const homeButton = getByLabelText('Zur Startseite');

    userEvent.click(homeButton);

    expect(history.location.pathname).toEqual(routes.home);
  });

  it('navigates to home after clicking on the title', () => {
    const { getByText, history } = renderWithProviders(<Header />, {
      mockRouter: true,
      initialRoute: routes.imprint,
    });
    const title = getByText('Schnelle Stimme', { exact: false });

    userEvent.click(title);

    expect(history.location.pathname).toEqual(routes.home);
  });
});
