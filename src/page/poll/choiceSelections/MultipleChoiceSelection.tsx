import React, { FC } from 'react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from '@material-ui/core';

import { Choice } from '../../../types/interface/Choice';
import { SetAnswerType } from '../PollPage';
import { MultipleChoiceAnswer } from '../../../types/type/MultipleChoiceAnswer';

interface Props {
  answer: MultipleChoiceAnswer;
  choices: Array<Choice>;
  setAnswer: SetAnswerType;
}

export const MultipleChoiceSelection: FC<Props> = ({
  answer,
  choices,
  setAnswer,
}) => {
  const handleChange = (index: number, checked: boolean) => {
    const answerCopy = [...answer];
    if (checked) {
      setAnswer([...answerCopy, index]);
    } else {
      const filteredAnswers = answerCopy.filter((i) => i !== index);
      setAnswer(filteredAnswers);
    }
  };

  return (
    <FormControl>
      <FormGroup aria-label="Antwortmöglichkeiten">
        {choices.map((choice, index) => (
          <FormControlLabel
            key={choice.id}
            control={
              <Checkbox
                color="primary"
                checked={answer.includes(index)}
                onChange={(event, checked) => handleChange(index, checked)}
                name={choice.id}
              />
            }
            label={choice.text}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};