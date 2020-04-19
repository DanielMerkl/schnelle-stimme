import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { PollCreationCallToAction } from './PollCreationCallToAction';
import { renderWithRouter } from '../../utils/function/renderWithRouter';
import { routes } from '../../utils/routes';
import { App } from '../../App';
import { keyboardEnterKeyMock } from '../../utils/keyboardEnterKeyMock';

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
    } = renderWithRouter(<App />);
    const submitButton = getByText('erstellen');
    const topicInput = getByLabelText('Thema / Frage');

    fireEvent.change(topicInput, { target: { value: 'Banana' } });
    fireEvent.click(submitButton);

    expect(history.location.pathname).toEqual(routes.creation);
    const initialTopicInput = getByDisplayValue('Banana');
    expect(initialTopicInput).toBeInTheDocument();
  });

  it('it forwards the current topic to the creation page after pressing the enter key', () => {
    const { getByDisplayValue, getByLabelText, history } = renderWithRouter(
      <App />
    );
    const topicInput = getByLabelText('Thema / Frage');

    fireEvent.change(topicInput, { target: { value: 'Banana' } });
    fireEvent.keyPress(topicInput, keyboardEnterKeyMock);

    expect(history.location.pathname).toEqual(routes.creation);
    const initialTopicInput = getByDisplayValue('Banana');
    expect(initialTopicInput).toBeInTheDocument();
  });
});
