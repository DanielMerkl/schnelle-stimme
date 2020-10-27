import React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AddAdditionalChoiceInput } from './AddAdditionalChoiceInput';
import { Choice } from '../../types/interface/Choice';
import { keyboardEventMock } from '../../utils/keyboardEventMock';

describe('AddAdditionalChoiceInput.test', () => {
  let renderResult: RenderResult;
  const setChoicesMock = jest.fn();

  beforeEach(() => {
    window.scrollBy = jest.fn();

    const choices: Array<Choice> = [
      { id: '1', text: 'Banane' },
      { id: '2', text: 'Ananas' },
      { id: '3', text: 'Kirsche' },
    ];

    renderResult = render(
      <AddAdditionalChoiceInput choices={choices} setChoices={setChoicesMock} />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders a button to add new choices', () => {
    const { getByText } = renderResult;
    const addButton = getByText('zusätzliche Antwort');

    expect(addButton).toBeInTheDocument();
  });

  it('renders an input after clicking on the add-button', () => {
    const { getByText, getByLabelText } = renderResult;
    const addButton = getByText('zusätzliche Antwort');

    userEvent.click(addButton);
    const additionalChoiceInput = getByLabelText('zusätzliche Antwort');

    expect(additionalChoiceInput).toBeInTheDocument();
    expect(additionalChoiceInput).toHaveFocus();
  });

  it('adds new choice after clicking on the add-icon', () => {
    const { getByText, getByLabelText } = renderResult;
    const addButton = getByText('zusätzliche Antwort');

    userEvent.click(addButton);
    const additionalChoiceInput = getByLabelText('zusätzliche Antwort');
    const addIcon = getByLabelText('hinzufügen');

    userEvent.type(additionalChoiceInput, 'Apfel');
    userEvent.click(addIcon);

    const updatedChoices: Array<Choice> = setChoicesMock.mock.calls[0][0];
    expect(updatedChoices.length).toEqual(4);
    const apfel = updatedChoices.find((choice) => choice.text === 'Apfel');
    expect(apfel).not.toBeUndefined();
  });

  it('adds new choice after pressing enter', () => {
    const { getByText, getByLabelText } = renderResult;
    const addButton = getByText('zusätzliche Antwort');

    userEvent.click(addButton);
    const additionalChoiceInput = getByLabelText('zusätzliche Antwort');

    userEvent.type(additionalChoiceInput, 'Apfel');
    fireEvent.keyDown(additionalChoiceInput, keyboardEventMock.enter);

    const updatedChoices: Array<Choice> = setChoicesMock.mock.calls[0][0];
    expect(updatedChoices.length).toEqual(4);
    const apfel = updatedChoices.find((choice) => choice.text === 'Apfel');
    expect(apfel).not.toBeUndefined();
  });

  it('renders the add-button again after clicking away', () => {
    const { getByText, getByLabelText, container } = renderResult;
    const addButton = getByText('zusätzliche Antwort');

    userEvent.click(addButton);
    const additionalChoiceInput = getByLabelText('zusätzliche Antwort');

    expect(additionalChoiceInput).toBeInTheDocument();
    expect(addButton).not.toBeInTheDocument();

    const wrapper = container.firstChild ?? new Node(); // outside of the ClickAwayListener
    fireEvent.click(wrapper);

    expect(additionalChoiceInput).not.toBeInTheDocument();
    expect(getByText('zusätzliche Antwort')).toBeInTheDocument();
  });

  it('renders the add-button again after pressing escape', () => {
    const { getByText, getByLabelText } = renderResult;
    const addButton = getByText('zusätzliche Antwort');

    userEvent.click(addButton);
    const additionalChoiceInput = getByLabelText('zusätzliche Antwort');

    expect(additionalChoiceInput).toBeInTheDocument();
    expect(addButton).not.toBeInTheDocument();

    fireEvent.keyDown(additionalChoiceInput, keyboardEventMock.escape);

    expect(additionalChoiceInput).not.toBeInTheDocument();
    expect(getByText('zusätzliche Antwort')).toBeInTheDocument();
  });

  it('focuses on the input after submitting new choice', () => {
    const { getByText, getByLabelText } = renderResult;
    const addButton = getByText('zusätzliche Antwort');

    userEvent.click(addButton);
    const additionalChoiceInput = getByLabelText('zusätzliche Antwort');

    userEvent.type(additionalChoiceInput, 'Apfel');
    fireEvent.keyDown(additionalChoiceInput, keyboardEventMock.enter);

    expect(additionalChoiceInput).toHaveFocus();
  });

  it('clears the input value after successful submit', () => {
    const { getByText, getByLabelText } = renderResult;
    const addButton = getByText('zusätzliche Antwort');

    userEvent.click(addButton);
    const additionalChoiceInput = getByLabelText('zusätzliche Antwort');

    userEvent.type(additionalChoiceInput, 'Apfel');
    fireEvent.keyDown(additionalChoiceInput, keyboardEventMock.enter);

    expect(additionalChoiceInput).toHaveValue('');
  });

  it('scrolls down for the correct height after submitting new choice', () => {
    const { getByText, getByLabelText } = renderResult;
    const addButton = getByText('zusätzliche Antwort');

    userEvent.click(addButton);
    const additionalChoiceInput = getByLabelText('zusätzliche Antwort');

    userEvent.type(additionalChoiceInput, 'Apfel');
    fireEvent.keyDown(additionalChoiceInput, keyboardEventMock.enter);

    expect(window.scrollBy).toHaveBeenCalledWith({
      top: 72,
      behavior: 'smooth',
    });
  });

  it('displays an error if the input is empty on submit', () => {
    const { getByText, getByLabelText } = renderResult;
    const addButton = getByText('zusätzliche Antwort');

    userEvent.click(addButton);
    const additionalChoiceInput = getByLabelText('zusätzliche Antwort');

    fireEvent.keyDown(additionalChoiceInput, keyboardEventMock.enter);

    const errorMessage = getByText('Bitte eine Antwort eingeben.');
    expect(errorMessage).toBeInTheDocument();
    expect(additionalChoiceInput).toBeInvalid();
    expect(setChoicesMock).not.toHaveBeenCalled();
  });

  it('displays an error if the input is duplicated on submit', () => {
    const { getByText, getByLabelText } = renderResult;
    const addButton = getByText('zusätzliche Antwort');

    userEvent.click(addButton);
    const additionalChoiceInput = getByLabelText('zusätzliche Antwort');

    userEvent.type(additionalChoiceInput, 'Banane');
    fireEvent.keyDown(additionalChoiceInput, keyboardEventMock.enter);

    const errorMessage = getByText('Diese Antwort existiert bereits.');
    expect(errorMessage).toBeInTheDocument();
    expect(additionalChoiceInput).toBeInvalid();
    expect(setChoicesMock).not.toHaveBeenCalled();
  });

  it('clears the error after typing again', () => {
    const { getByText, getByLabelText } = renderResult;
    const addButton = getByText('zusätzliche Antwort');

    userEvent.click(addButton);
    const additionalChoiceInput = getByLabelText('zusätzliche Antwort');

    fireEvent.keyDown(additionalChoiceInput, keyboardEventMock.enter);

    expect(additionalChoiceInput).toBeInvalid();

    userEvent.type(additionalChoiceInput, '123');

    expect(additionalChoiceInput).toBeValid();
  });

  it('trims choice-text on submit', () => {
    const { getByText, getByLabelText } = renderResult;
    const addButton = getByText('zusätzliche Antwort');

    userEvent.click(addButton);
    const additionalChoiceInput = getByLabelText('zusätzliche Antwort');

    userEvent.type(additionalChoiceInput, '     Apfel     ');
    fireEvent.keyDown(additionalChoiceInput, keyboardEventMock.enter);

    const updatedChoices: Array<Choice> = setChoicesMock.mock.calls[0][0];
    expect(updatedChoices.length).toEqual(4);
    const apfel = updatedChoices.find((choice) => choice.text === 'Apfel');
    expect(apfel).not.toBeUndefined();
  });
});
