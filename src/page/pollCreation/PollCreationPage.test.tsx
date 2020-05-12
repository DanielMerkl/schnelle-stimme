import React from 'react';
import { act, fireEvent, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '../../utils/function/renderWithProviders';
import { PollCreationPage } from './PollCreationPage';
import { PollCreationSessionStorageItem } from '../../types/enum/PollCreationSessionStorageItem';
import { PollType } from '../../types/enum/PollType';
import { Choice } from '../../types/interface/Choice';
import { Api } from '../../utils/Api';
import { Poll } from '../../types/interface/Poll';

describe('PollCreationPage', () => {
  let renderResult: RenderResult;
  const ApiMock = Api as jest.Mocked<typeof Api>;

  beforeEach(() => {
    const choices: Array<Choice> = [
      { id: '1', text: 'first' },
      { id: '2', text: 'second' },
      { id: '3', text: 'third' },
    ];

    sessionStorage.setItem(
      PollCreationSessionStorageItem.Topic,
      JSON.stringify('Banana')
    );
    sessionStorage.setItem(
      PollCreationSessionStorageItem.Description,
      JSON.stringify('Apple')
    );
    sessionStorage.setItem(
      PollCreationSessionStorageItem.Choices,
      JSON.stringify(choices)
    );
    sessionStorage.setItem(
      PollCreationSessionStorageItem.PollType,
      JSON.stringify(PollType.MULTIPLE_CHOICE)
    );

    renderResult = renderWithProviders(<PollCreationPage />);
  });

  afterEach(() => {
    sessionStorage.clear();
    jest.clearAllMocks();
  });

  it('renders the headline of the page', () => {
    const { getByText } = renderResult;
    const pageHeadline = getByText('Umfrage erstellen');

    expect(pageHeadline).toBeInTheDocument();
  });

  it('renders the headline for the choices', () => {
    const { getByText } = renderResult;
    const choicesHeadline = getByText('Antwortmöglichkeiten');

    expect(choicesHeadline).toBeInTheDocument();
  });

  it('renders a button to publish the poll', () => {
    const { getByText } = renderResult;
    const submitButtonLabel = getByText('veröffentlichen');
    const submitButton = submitButtonLabel.parentElement;

    expect(submitButton).toBeInTheDocument();
  });

  it('initializes inputs if values from sessionStorage are available', () => {
    const { getByText, getByDisplayValue } = renderResult;
    const topicInput = getByDisplayValue('Banana');
    const descriptionInput = getByDisplayValue('Apple');
    const pollTypeInput = getByText('Multiple-Choice');

    expect(topicInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(pollTypeInput).toBeInTheDocument();
  });

  it('disables the publish button when the topic is empty', () => {
    const { getByText, getByLabelText } = renderResult;
    const topicInput = getByLabelText('Thema / Frage *');
    const submitButtonLabel = getByText('veröffentlichen');
    const submitButton = submitButtonLabel.parentElement;

    expect(topicInput).toHaveValue('Banana');
    expect(submitButton).toBeEnabled();

    fireEvent.change(topicInput, { target: { value: '' } });

    expect(topicInput).toHaveValue('');
    expect(submitButton).toBeDisabled();
  });

  it('disables the publish button when choices are duplicated', () => {
    const { getByText, getByDisplayValue } = renderResult;
    const submitButtonLabel = getByText('veröffentlichen');
    const submitButton = submitButtonLabel.parentElement;
    const firstChoiceInput = getByDisplayValue('first');
    const secondChoiceInput = getByDisplayValue('second');

    expect(submitButton).toBeEnabled();

    fireEvent.change(secondChoiceInput, { target: { value: '' } });
    userEvent.type(secondChoiceInput, 'first');

    expect(firstChoiceInput).toHaveValue('first');
    expect(secondChoiceInput).toHaveValue('first');
    expect(submitButton).toBeDisabled();

    userEvent.type(secondChoiceInput, '123');

    expect(submitButton).toBeEnabled();
  });

  it('calls the api with the correct parameters', async () => {
    const { getByText } = renderResult;
    const submitButtonLabel = getByText('veröffentlichen');
    const submitButton = submitButtonLabel.parentElement;

    await act(async () => {
      fireEvent.click(submitButton!);
    });

    const poll: Poll = ApiMock.createPoll.mock.calls[0][0];
    expect(ApiMock.createPoll).toHaveBeenCalled();
    expect(poll.topic).toEqual('Banana');
    expect(poll.description).toEqual('Apple');
    expect(poll.type).toEqual(PollType.MULTIPLE_CHOICE);
    expect(poll.choices.length).toEqual(3);
    expect(poll.choices[0].text).toEqual('first');
    expect(poll.choices[1].text).toEqual('second');
    expect(poll.choices[2].text).toEqual('third');
  });

  it('disables the publish button while waiting for the async submit-call', async () => {
    let manuallyResolvePromise: Function = () => {};
    const manuallyDelayedPromise: Promise<Poll> = new Promise((resolve) => {
      manuallyResolvePromise = resolve;
    });
    ApiMock.createPoll.mockImplementationOnce(() => manuallyDelayedPromise);

    const { getByText } = renderResult;
    const submitButtonLabel = getByText('veröffentlichen');
    const submitButton = submitButtonLabel.parentElement;

    expect(submitButton).toBeEnabled();

    userEvent.click(submitButton!);

    expect(submitButton).toBeDisabled();

    await act(async () => {
      manuallyResolvePromise();
    });

    expect(submitButton).toBeEnabled();
  });

  it('shows an error message if submit went wrong', async () => {
    ApiMock.createPoll.mockImplementationOnce(() => {
      return Promise.reject('Fehler beim Erstellen der Umfrage.');
    });

    const { getByText } = renderResult;
    const submitButtonLabel = getByText('veröffentlichen');
    const submitButton = submitButtonLabel.parentElement;

    await act(async () => {
      userEvent.click(submitButton!);
    });

    const snackbar = getByText('Fehler beim Erstellen der Umfrage.');
    expect(snackbar).toBeInTheDocument();
  });
});
