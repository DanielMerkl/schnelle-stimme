import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MultipleChoiceSelection } from './MultipleChoiceSelection';
import { MultipleChoiceAnswer } from '../../../types/type/MultipleChoiceAnswer';
import { Choice } from '../../../types/interface/Choice';

describe('MultipleChoiceSelection', () => {
  let renderResult: RenderResult;
  const setAnswerMock = jest.fn();
  const answer: MultipleChoiceAnswer = [];
  const choices: Array<Choice> = [
    { id: '1', text: 'Banana' },
    { id: '2', text: 'Apple' },
    { id: '3', text: 'Cherry' },
  ];

  beforeEach(() => {
    renderResult = render(
      <MultipleChoiceSelection
        answer={answer}
        choices={choices}
        setAnswer={setAnswerMock}
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders all choices', () => {
    const { getByLabelText } = renderResult;
    const bananaChoice = getByLabelText('Banana');
    const appleChoice = getByLabelText('Apple');
    const cherryChoice = getByLabelText('Cherry');

    expect(bananaChoice).toBeInTheDocument();
    expect(appleChoice).toBeInTheDocument();
    expect(cherryChoice).toBeInTheDocument();
  });

  it('renders selected choices correctly', () => {
    const { getByLabelText, rerender } = renderResult;
    rerender(
      <MultipleChoiceSelection
        answer={[0, 2]}
        choices={choices}
        setAnswer={setAnswerMock}
      />
    );
    const bananaChoice = getByLabelText('Banana');
    const appleChoice = getByLabelText('Apple');
    const cherryChoice = getByLabelText('Cherry');

    expect(bananaChoice).toBeChecked();
    expect(appleChoice).not.toBeChecked();
    expect(cherryChoice).toBeChecked();
  });

  it('calls setAnswer correctly (checking)', () => {
    const { getByLabelText } = renderResult;
    const bananaChoice = getByLabelText('Banana');

    userEvent.click(bananaChoice);

    expect(setAnswerMock).toHaveBeenCalledWith([0]);
  });

  it('calls setAnswer correctly (unchecking)', () => {
    const { getByLabelText, rerender } = renderResult;
    rerender(
      <MultipleChoiceSelection
        answer={[0, 1, 2]}
        choices={choices}
        setAnswer={setAnswerMock}
      />
    );
    const bananaChoice = getByLabelText('Banana');

    userEvent.click(bananaChoice);

    expect(setAnswerMock).toHaveBeenCalledWith([1, 2]);
  });
});
