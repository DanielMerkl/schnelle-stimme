import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PollCreationCallToAction } from './PollCreationCallToAction';
import { renderWithRouter } from '../../utils/function/renderWithRouter';
import { routes } from '../../utils/routes';
import { App } from '../../App';

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

  // TODO: activate after implementing topic input in poll creation page
  xit('it forwards the current topic to the creation page after clicking on the submit button', async () => {
    const { getByText, getByTestId, history } = renderWithRouter(<App />);
    const submitButton = getByText('erstellen');
    const topicInput = getByTestId('topic-input');

    fireEvent.change(topicInput, { target: { value: 'Banane' } });
    fireEvent.click(submitButton);

    expect(history.location.pathname).toEqual(routes.creation);
    const initialTopicInput = getByText('Bananen');
    expect(initialTopicInput).toBeInTheDocument();
  });

  // TODO: activate after implementing topic input in poll creation page
  xit('it forwards the current topic to the creation page after pressing the enter key', async () => {
    const { getByText, getByTestId, history } = renderWithRouter(<App />);
    const topicInput = getByTestId('topic-input');

    fireEvent.change(topicInput, { target: { value: 'Banane' } });
    fireEvent.keyPress(topicInput, { key: 'Enter' });

    expect(history.location.pathname).toEqual(routes.creation);
    const initialTopicInput = getByText('Bananen');
    expect(initialTopicInput).toBeInTheDocument();
  });
});
