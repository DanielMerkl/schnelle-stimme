import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Choice } from '../../../types/interface/Choice';
import { SingleChoiceSelection } from './SingleChoiceSelection';
import { SingleChoiceAnswer } from '../../../types/type/SingleChoiceAnswer';

describe('SingleChoiceSelection', () => {
  let renderResult: RenderResult;
  const setAnswerMock = jest.fn();
  const answer: SingleChoiceAnswer | null = null;
  const choices: Array<Choice> = [
    { id: '1', text: 'Banana' },
    { id: '2', text: 'Apple' },
    { id: '3', text: 'Cherry' },
  ];

  beforeEach(() => {
    renderResult = render(
      <SingleChoiceSelection
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

  it('renders selected choice correctly', () => {
    const { getByLabelText, rerender } = renderResult;
    rerender(
      <SingleChoiceSelection
        answer={1}
        choices={choices}
        setAnswer={setAnswerMock}
      />
    );
    const bananaChoice = getByLabelText('Banana');
    const appleChoice = getByLabelText('Apple');
    const cherryChoice = getByLabelText('Cherry');

    expect(bananaChoice).not.toBeChecked();
    expect(appleChoice).toBeChecked();
    expect(cherryChoice).not.toBeChecked();
  });

  it('calls setAnswer correctly', () => {
    const { getByLabelText } = renderResult;
    const bananaChoice = getByLabelText('Banana');
    const appleChoice = getByLabelText('Apple');
    const cherryChoice = getByLabelText('Cherry');

    userEvent.click(bananaChoice);

    expect(setAnswerMock).toHaveBeenLastCalledWith(0);

    userEvent.click(appleChoice);

    expect(setAnswerMock).toHaveBeenLastCalledWith(1);

    userEvent.click(cherryChoice);

    expect(setAnswerMock).toHaveBeenLastCalledWith(2);
  });
});
