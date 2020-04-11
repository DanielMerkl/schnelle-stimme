import React from 'react';
import { fireEvent } from '@testing-library/react';

import { Header } from './Header';
import { renderWithProviders } from '../utils/function/renderWithProviders';
import { renderWithRouter } from '../utils/function/renderWithRouter';
import { routes } from '../utils/routes';

describe('Header', () => {
  it('renders a title', () => {
    const { getByText } = renderWithProviders(<Header />);
    const title = getByText('Schnelle Stimme', { exact: false });

    expect(title).toBeInTheDocument();
  });

  it('renders a home button', () => {
    const { getByTestId } = renderWithProviders(<Header />);
    const homeButton = getByTestId('home-button');

    expect(homeButton).toBeInTheDocument();
  });

  it('navigates to home after clicking on the home button', () => {
    const { getByTestId, history } = renderWithRouter(<Header />, {
      initialRoute: routes.imprint,
    });
    const homeButton = getByTestId('home-button');

    fireEvent.click(homeButton);

    expect(history.location.pathname).toEqual(routes.home);
  });

  it('navigates to home after clicking on the title', () => {
    const { getByText, history } = renderWithRouter(<Header />, {
      initialRoute: routes.imprint,
    });
    const title = getByText('Schnelle Stimme', { exact: false });

    fireEvent.click(title);

    expect(history.location.pathname).toEqual(routes.home);
  });
});
