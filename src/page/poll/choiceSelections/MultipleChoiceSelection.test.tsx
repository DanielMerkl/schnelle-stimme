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
  const bananaId = '1';
  const appleId = '2';
  const cherryId = '3';
  const choices: Array<Choice> = [
    { id: bananaId, text: 'Banana' },
    { id: appleId, text: 'Apple' },
    { id: cherryId, text: 'Cherry' },
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
        answer={[bananaId, cherryId]}
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

    expect(setAnswerMock).toHaveBeenCalledWith([bananaId]);
  });

  it('calls setAnswer correctly (unchecking)', () => {
    const { getByLabelText, rerender } = renderResult;
    rerender(
      <MultipleChoiceSelection
        answer={[bananaId, appleId, cherryId]}
        choices={choices}
        setAnswer={setAnswerMock}
      />
    );
    const bananaChoice = getByLabelText('Banana');

    userEvent.click(bananaChoice);

    expect(setAnswerMock).toHaveBeenCalledWith([appleId, cherryId]);
  });
});
