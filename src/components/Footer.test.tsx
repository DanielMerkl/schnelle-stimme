import React from 'react';
import userEvent from '@testing-library/user-event';

import { Footer } from './Footer';
import { renderWithRouter } from '../utils/function/renderWithRouter';
import { routes } from '../utils/routes';

describe('Footer', () => {
  it('renders a link to the imprint', () => {
    const { getByText } = renderWithRouter(<Footer />);
    const imprintLink = getByText('Impressum');

    expect(imprintLink).toBeInTheDocument();
  });

  it('renders a link to the privacy policies', () => {
    const { getByText } = renderWithRouter(<Footer />);
    const privacyPoliciesLink = getByText('Datenschutzrichtlinien');

    expect(privacyPoliciesLink).toBeInTheDocument();
  });

  it('renders a link to the terms of service', () => {
    const { getByText } = renderWithRouter(<Footer />);
    const termsOfServiceLink = getByText('Nutzungsbedingungen');

    expect(termsOfServiceLink).toBeInTheDocument();
  });

  it('renders a copyright information', () => {
    const { getByText } = renderWithRouter(<Footer />);
    const copyrightInformation = getByText('Copyright © 2020');

    expect(copyrightInformation).toBeInTheDocument();
  });

  it('navigates to imprint after clicking on the link', () => {
    const { getByText, history } = renderWithRouter(<Footer />);
    const imprintLink = getByText('Impressum');

    userEvent.click(imprintLink);

    expect(history.location.pathname).toEqual(routes.imprint);
  });

  it('navigates to privacy policies after clicking on the link', () => {
    const { getByText, history } = renderWithRouter(<Footer />);
    const privacyPoliciesLink = getByText('Datenschutzrichtlinien');

    userEvent.click(privacyPoliciesLink);

    expect(history.location.pathname).toEqual(routes.privacy);
  });

  it('navigates to terms of service after clicking on the link', () => {
    const { getByText, history } = renderWithRouter(<Footer />);
    const termsOfServiceLink = getByText('Nutzungsbedingungen');

    userEvent.click(termsOfServiceLink);

    expect(history.location.pathname).toEqual(routes.terms);
  });
});
