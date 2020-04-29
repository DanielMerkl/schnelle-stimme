import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Choices } from './Choices';
import { Choice } from '../../types/interface/Choice';

describe('Choices', () => {
  const setChoicesMock = jest.fn();
  let renderResult: RenderResult;

  beforeEach(() => {
    const choices: Array<Choice> = [
      { id: '1', text: 'Banane' },
      { id: '2', text: 'Ananas' },
      { id: '3', text: 'Kirsche' },
    ];

    renderResult = render(
      <Choices choices={choices} setChoices={setChoicesMock} />
    );
  });

  afterEach(() => {
    setChoicesMock.mockReset();
  });

  it('renders all choices', () => {
    const { getByDisplayValue } = renderResult;
    const bananeInput = getByDisplayValue('Banane');
    const ananasInput = getByDisplayValue('Ananas');
    const kirscheInput = getByDisplayValue('Kirsche');

    expect(bananeInput).toBeInTheDocument();
    expect(ananasInput).toBeInTheDocument();
    expect(kirscheInput).toBeInTheDocument();
  });

  it('deletes the correct choice', () => {
    const { getByLabelText } = renderResult;
    const deleteButton = getByLabelText('2. Antwortmöglichkeit löschen');

    fireEvent.click(deleteButton);

    const updatedChoices: Array<Choice> = setChoicesMock.mock.calls[0][0];
    const ananas = updatedChoices.find((choice) => choice.text === 'Ananas');
    expect(updatedChoices.length).toEqual(2);
    expect(ananas).toBeUndefined();
  });

  it('changes text correctly', () => {
    const { getByLabelText } = renderResult;
    const secondInput = getByLabelText('2. Antwortmöglichkeit');

    // TODO: remove ts-ignore as soon as type-definitions of library have been updated
    // @ts-ignore
    userEvent.clear(secondInput);
    userEvent.type(secondInput, 'Apfel');

    const updatedChoices: Array<Choice> = setChoicesMock.mock.calls[0][0];
    const ananas = updatedChoices.find((choice) => choice.text === 'Ananas');
    const updatedSecondInputValue = updatedChoices[1].text;
    expect(updatedChoices.length).toEqual(3);
    expect(ananas).toBeUndefined();
    expect(updatedSecondInputValue).toEqual('Apfel');
  });

  it('displays error state when text is duplicated', async () => {
    const { findAllByDisplayValue, rerender } = renderResult;
    const duplicatedChoices: Array<Choice> = [
      { id: '1', text: 'Banane' },
      { id: '2', text: 'Banane' },
      { id: '3', text: 'Kirsche' },
    ];
    rerender(<Choices choices={duplicatedChoices} setChoices={() => {}} />);
    const inputElements = await findAllByDisplayValue('Banane');

    expect(inputElements.length).toEqual(2);
    expect(inputElements[0]).toBeInvalid();
    expect(inputElements[1]).toBeInvalid();
  });
});
