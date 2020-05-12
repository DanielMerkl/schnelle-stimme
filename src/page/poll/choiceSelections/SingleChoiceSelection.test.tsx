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
        answer={appleId}
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

    expect(setAnswerMock).toHaveBeenLastCalledWith(bananaId);

    userEvent.click(appleChoice);

    expect(setAnswerMock).toHaveBeenLastCalledWith(appleId);

    userEvent.click(cherryChoice);

    expect(setAnswerMock).toHaveBeenLastCalledWith(cherryId);
  });
});
