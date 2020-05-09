import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PollCreationCallToAction } from './PollCreationCallToAction';
import { renderWithProviders } from '../../utils/function/renderWithProviders';
import { routes } from '../../utils/routes';
import { App } from '../../App';
import { keyboardEventMock } from '../../utils/keyboardEventMock';

describe('PollCreationCallToAction', () => {
  it('renders the correct headline', () => {
    const { getByText } = render(<PollCreationCallToAction />);
    const headline = getByText('Erstelle eine neue Umfrage');

    expect(headline).toBeInTheDocument();
  });

  it('renders a submit button', () => {
    const { getByText } = render(<PollCreationCallToAction />);
    const submitButton = getByText('erstellen');

    expect(submitButton).toBeInTheDocument();
  });

  it('it forwards the current topic to the creation page after clicking on the submit button', () => {
    const {
      getByText,
      getByLabelText,
      getByDisplayValue,
      history,
    } = renderWithProviders(<App />, { mockRouter: true });
    const submitButton = getByText('erstellen');
    const topicInput = getByLabelText('Thema / Frage');

    userEvent.type(topicInput, 'Banana');
    userEvent.click(submitButton);

    expect(history.location.pathname).toEqual(routes.creation);
    const initialTopicInput = getByDisplayValue('Banana');
    expect(initialTopicInput).toBeInTheDocument();
  });

  it('it forwards the current topic to the creation page after pressing the enter key', () => {
    const {
      getByDisplayValue,
      getByLabelText,
      history,
    } = renderWithProviders(<App />, { mockRouter: true });
    const topicInput = getByLabelText('Thema / Frage');

    userEvent.type(topicInput, 'Banana');
    fireEvent.keyPress(topicInput, keyboardEventMock.enter);

    expect(history.location.pathname).toEqual(routes.creation);
    const initialTopicInput = getByDisplayValue('Banana');
    expect(initialTopicInput).toBeInTheDocument();
  });
});
