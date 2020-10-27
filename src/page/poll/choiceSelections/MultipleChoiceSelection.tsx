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
import { ChoiceId } from '../../../types/type/ChoiceId';

interface Props {
  answer: MultipleChoiceAnswer;
  choices: Array<Choice>;
  setAnswer: SetAnswerType;
}

export const MultipleChoiceSelection: FC<Props> = ({
  answer,
  choices,
  setAnswer,
  ...other
}) => {
  const handleChange = (id: ChoiceId, checked: boolean) => {
    if (checked) {
      const updatedAnswers = [...answer, id];
      setAnswer(updatedAnswers);
    } else {
      const filteredAnswers = answer.filter((i) => i !== id);
      setAnswer(filteredAnswers);
    }
  };

  return (
    <FormControl {...other}>
      <FormGroup aria-label="Antwortmöglichkeiten">
        {choices.map((choice) => {
          const checked = answer.includes(choice.id);

          return (
            <FormControlLabel
              key={choice.id}
              control={
                <Checkbox
                  color="primary"
                  checked={checked}
                  inputProps={{ 'aria-checked': checked }}
                  onChange={(event, checked) => {
                    handleChange(choice.id, checked);
                  }}
                  name={choice.id}
                />
              }
              label={choice.text}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};
