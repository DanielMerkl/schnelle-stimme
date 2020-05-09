import React, { FC } from 'react';

import { PollType } from '../../types/enum/PollType';
import { SingleChoiceSelection } from './choiceSelections/SingleChoiceSelection';
import { SingleChoiceAnswer } from '../../types/type/SingleChoiceAnswer';
import { MultipleChoiceSelection } from './choiceSelections/MultipleChoiceSelection';
import { MultipleChoiceAnswer } from '../../types/type/MultipleChoiceAnswer';
import { Choice } from '../../types/interface/Choice';
import { AnswerContent } from '../../types/type/AnswerContent';
import { SetAnswerType } from './PollPage';

interface Props {
  pollType: PollType;
  choices: Array<Choice>;
  answer: AnswerContent | null;
  setAnswer: SetAnswerType;
}

export const ChoiceSelection: FC<Props> = ({
  pollType,
  choices,
  answer,
  setAnswer,
}) => {
  switch (pollType) {
    case PollType.SINGLE_CHOICE:
      return (
        <SingleChoiceSelection
          data-testid="single-choice-selection"
          answer={answer as SingleChoiceAnswer}
          choices={choices}
          setAnswer={setAnswer}
        />
      );
    case PollType.MULTIPLE_CHOICE:
      return (
        <MultipleChoiceSelection
          data-testid="multiple-choice-selection"
          answer={answer === null ? [] : (answer as MultipleChoiceAnswer)}
          choices={choices}
          setAnswer={setAnswer}
        />
      );
  }
};
